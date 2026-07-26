"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, X, Music } from "lucide-react"
import WaveformVisualizer from "./waveform-visualizer"

interface MiniPlayerProps {
    track: {
        id: string
        title: string
        category: string
        mood: string
        previewAudio: string
    } | null
    isPlaying: boolean
    onTogglePlay: () => void
    onClose: () => void
    visible: boolean
}

export default function MiniPlayer({
    track,
    isPlaying,
    onTogglePlay,
    onClose,
    visible,
}: MiniPlayerProps) {
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const seekingRef = useRef(false)
    const seekTimeRef = useRef(0)
    const barRef = useRef<HTMLDivElement>(null)

    // Sync with external play state
    useEffect(() => {
        const audio = audioRef.current
        if (!audio || !track) return

        if (isPlaying) {
            audio.play().catch(() => {})
        } else {
            audio.pause()
        }
    }, [isPlaying, track])

    // Audio events
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const onTimeUpdate = () => {
            if (!seekingRef.current) setCurrentTime(audio.currentTime)
        }
        const onDuration = () => {
            if (audio.duration && isFinite(audio.duration)) setDuration(audio.duration)
        }
        const onEnded = () => {
            setCurrentTime(0)
            onClose()
        }

        if (audio.duration && isFinite(audio.duration)) setDuration(audio.duration)

        audio.addEventListener("timeupdate", onTimeUpdate)
        audio.addEventListener("loadedmetadata", onDuration)
        audio.addEventListener("durationchange", onDuration)
        audio.addEventListener("ended", onEnded)

        return () => {
            audio.removeEventListener("timeupdate", onTimeUpdate)
            audio.removeEventListener("loadedmetadata", onDuration)
            audio.removeEventListener("durationchange", onDuration)
            audio.removeEventListener("ended", onEnded)
        }
    }, [onClose])

    // Seek via progress bar
    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!seekingRef.current || !barRef.current || !duration) return
            const rect = barRef.current.getBoundingClientRect()
            const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
            const time = (x / rect.width) * duration
            seekTimeRef.current = time
            setCurrentTime(time)
        }
        const onMouseUp = () => {
            if (!seekingRef.current) return
            seekingRef.current = false
            const audio = audioRef.current
            if (audio) audio.currentTime = seekTimeRef.current
        }
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
            document.removeEventListener("mouseup", onMouseUp)
        }
    }, [duration])

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0

    const formatTime = (t: number) => {
        if (isNaN(t)) return "0:00"
        const m = Math.floor(t / 60)
        const s = Math.floor(t % 60)
        return `${m}:${s.toString().padStart(2, "0")}`
    }

    if (!track || !visible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300">
            {/* Progress bar on top */}
            <div
                ref={barRef}
                className="h-1 bg-muted cursor-pointer touch-none"
                onMouseDown={(e) => {
                    if (!duration) return
                    seekingRef.current = true
                    const rect = barRef.current!.getBoundingClientRect()
                    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
                    const time = (x / rect.width) * duration
                    seekTimeRef.current = time
                    setCurrentTime(time)
                }}
                onTouchStart={(e) => {
                    if (!duration || !barRef.current) return
                    const rect = barRef.current.getBoundingClientRect()
                    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
                    const time = (x / rect.width) * duration
                    seekTimeRef.current = time
                    setCurrentTime(time)
                    seekingRef.current = true
                }}
                onTouchMove={(e) => {
                    if (!seekingRef.current || !barRef.current || !duration) return
                    const rect = barRef.current.getBoundingClientRect()
                    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
                    const time = (x / rect.width) * duration
                    seekTimeRef.current = time
                    setCurrentTime(time)
                }}
                onTouchEnd={() => {
                    if (!seekingRef.current) return
                    seekingRef.current = false
                    const audio = audioRef.current
                    if (audio) audio.currentTime = seekTimeRef.current
                }}
            >
                <div
                    className="h-full bg-primary transition-[width] duration-75"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Player body */}
            <div className="bg-card/95 backdrop-blur-xl border-t border-border px-3 sm:px-6 py-2.5 sm:py-3">
                <audio ref={audioRef} src={track.previewAudio} preload="metadata" />

                <div className="max-w-6xl mx-auto flex items-center gap-3 sm:gap-4">
                    {/* Album art mini */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-foreground via-primary/90 to-accent flex items-center justify-center overflow-hidden">
                        <Music className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                    </div>

                    {/* Track info */}
                    <div className="flex-1 min-w-0">
                        <p className="font-heading font-bold text-sm sm:text-base text-foreground truncate">
                            {track.title}
                        </p>
                        <p className="font-body text-[10px] sm:text-xs text-muted-foreground truncate">
                            {track.category} • {track.mood}
                        </p>
                    </div>

                    {/* Waveform - hidden on very small screens */}
                    <div className="hidden sm:block w-24 md:w-32 h-8">
                        <WaveformVisualizer
                            audioElement={audioRef.current}
                            isPlaying={isPlaying}
                            barCount={16}
                            className="h-full"
                        />
                    </div>

                    {/* Time */}
                    <span className="hidden sm:block text-xs text-muted-foreground font-mono whitespace-nowrap">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>

                    {/* Controls */}
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                        <button
                            onClick={onTogglePlay}
                            className="w-9 h-9 sm:w-10 sm:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-accent transition-all duration-200 hover:scale-105"
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? (
                                <Pause className="w-4 h-4" />
                            ) : (
                                <Play className="w-4 h-4 ml-0.5" />
                            )}
                        </button>
                        <button
                            onClick={onClose}
                            className="w-7 h-7 sm:w-8 sm:h-8 text-muted-foreground hover:text-foreground rounded-full flex items-center justify-center hover:bg-muted transition-all duration-200"
                            aria-label="Close player"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
