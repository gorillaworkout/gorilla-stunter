"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2 } from "lucide-react"

interface AudioPlayerProps {
    audioUrl: string
    title: string
    onPlay?: () => void
    onPause?: () => void
    isPlaying?: boolean
}

export default function AudioPlayer({
    audioUrl,
    title,
    onPlay,
    onPause,
    isPlaying: externalIsPlaying,
}: AudioPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(1)
    const [isSeeking, setIsSeeking] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)
    const progressBarRef = useRef<HTMLDivElement>(null)
    const seekingRef = useRef(false)
    const seekTimeRef = useRef(0)

    const actualIsPlaying = externalIsPlaying !== undefined ? externalIsPlaying : isPlaying

    // Setup audio events
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const handleTimeUpdate = () => {
            if (!seekingRef.current) {
                setCurrentTime(audio.currentTime)
            }
        }

        const handleDurationChange = () => {
            if (audio.duration && isFinite(audio.duration)) {
                setDuration(audio.duration)
            }
        }

        const handleLoadedMetadata = () => {
            if (audio.duration && isFinite(audio.duration)) {
                setDuration(audio.duration)
            }
        }

        const handleEnded = () => {
            setIsPlaying(false)
            setCurrentTime(0)
            onPause?.()
        }

        // Check if duration is already available
        if (audio.duration && isFinite(audio.duration)) {
            setDuration(audio.duration)
        }

        audio.addEventListener("timeupdate", handleTimeUpdate)
        audio.addEventListener("loadedmetadata", handleLoadedMetadata)
        audio.addEventListener("durationchange", handleDurationChange)
        audio.addEventListener("ended", handleEnded)

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate)
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
            audio.removeEventListener("durationchange", handleDurationChange)
            audio.removeEventListener("ended", handleEnded)
        }
    }, [onPause])

    // Pause audio when external state says not playing
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return
        if (externalIsPlaying === false && !audio.paused) {
            audio.pause()
        }
    }, [externalIsPlaying])

    const togglePlay = () => {
        const audio = audioRef.current
        if (!audio) return

        if (actualIsPlaying) {
            audio.pause()
            setIsPlaying(false)
            onPause?.()
        } else {
            audio.play().catch(() => {
                setIsPlaying(false)
            })
            setIsPlaying(true)
            onPlay?.()
        }
    }

    // Seek helpers using refs to avoid stale closures
    const getTimeFromClientX = (clientX: number): number => {
        const bar = progressBarRef.current
        if (!bar) return 0
        const d = audioRef.current?.duration
        if (!d || !isFinite(d)) return 0
        const rect = bar.getBoundingClientRect()
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
        return (x / rect.width) * d
    }

    const startSeek = (clientX: number) => {
        seekingRef.current = true
        setIsSeeking(true)
        const time = getTimeFromClientX(clientX)
        seekTimeRef.current = time
        setCurrentTime(time)
    }

    const moveSeek = (clientX: number) => {
        if (!seekingRef.current) return
        const time = getTimeFromClientX(clientX)
        seekTimeRef.current = time
        setCurrentTime(time)
    }

    const endSeek = () => {
        if (!seekingRef.current) return
        seekingRef.current = false
        setIsSeeking(false)
        const audio = audioRef.current
        if (audio) {
            audio.currentTime = seekTimeRef.current
        }
    }

    // Global mouse move/up for drag outside the bar
    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!seekingRef.current) return
            const bar = progressBarRef.current
            if (!bar) return
            const d = audioRef.current?.duration
            if (!d || !isFinite(d)) return
            const rect = bar.getBoundingClientRect()
            const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
            const time = (x / rect.width) * d
            seekTimeRef.current = time
            setCurrentTime(time)
        }

        const onMouseUp = () => {
            if (!seekingRef.current) return
            seekingRef.current = false
            setIsSeeking(false)
            const audio = audioRef.current
            if (audio) {
                audio.currentTime = seekTimeRef.current
            }
        }

        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
            document.removeEventListener("mouseup", onMouseUp)
        }
    }, [])

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current
        if (!audio) return
        const newVolume = parseFloat(e.target.value)
        audio.volume = newVolume
        setVolume(newVolume)
    }

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00"
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0

    return (
        <div className="w-full">
            <audio ref={audioRef} src={audioUrl} preload="metadata" />

            <div className="flex items-center gap-2 sm:gap-3">
                <button
                    onClick={togglePlay}
                    className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110"
                    aria-label={actualIsPlaying ? "Pause" : "Play"}
                >
                    {actualIsPlaying ? (
                        <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                        <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />
                    )}
                </button>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-[10px] sm:text-xs text-muted-foreground font-mono whitespace-nowrap">
                            {formatTime(currentTime)}
                        </span>

                        {/* Custom seekable progress bar */}
                        <div
                            ref={progressBarRef}
                            className="relative flex-1 h-7 sm:h-8 flex items-center cursor-pointer touch-none select-none group/seek"
                            onMouseDown={(e) => {
                                e.preventDefault()
                                startSeek(e.clientX)
                            }}
                            onTouchStart={(e) => {
                                startSeek(e.touches[0].clientX)
                            }}
                            onTouchMove={(e) => {
                                if (!seekingRef.current) return
                                const bar = progressBarRef.current
                                if (!bar) return
                                const d = audioRef.current?.duration
                                if (!d || !isFinite(d)) return
                                const rect = bar.getBoundingClientRect()
                                const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
                                const time = (x / rect.width) * d
                                seekTimeRef.current = time
                                setCurrentTime(time)
                            }}
                            onTouchEnd={() => {
                                endSeek()
                            }}
                            role="slider"
                            aria-label="Seek audio"
                            aria-valuemin={0}
                            aria-valuemax={duration || 0}
                            aria-valuenow={currentTime}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                const audio = audioRef.current
                                if (!audio || !duration) return
                                if (e.key === "ArrowRight") {
                                    const t = Math.min(duration, currentTime + 5)
                                    audio.currentTime = t
                                    setCurrentTime(t)
                                } else if (e.key === "ArrowLeft") {
                                    const t = Math.max(0, currentTime - 5)
                                    audio.currentTime = t
                                    setCurrentTime(t)
                                }
                            }}
                        >
                            {/* Track background */}
                            <div className="absolute inset-x-0 h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                                {/* Filled progress */}
                                <div
                                    className="absolute inset-y-0 left-0 bg-primary rounded-full"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            {/* Draggable thumb/dot */}
                            <div
                                className={`pointer-events-none absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full shadow-lg shadow-primary/40 border-2 border-primary-foreground/30 ${
                                    isSeeking
                                        ? "scale-150 ring-4 ring-primary/20"
                                        : "group-hover/seek:scale-125"
                                } transition-transform duration-100`}
                                style={{ left: `${progress}%` }}
                            />
                        </div>

                        <span className="text-[10px] sm:text-xs text-muted-foreground font-mono whitespace-nowrap">
                            {formatTime(duration)}
                        </span>
                    </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                    <Volume2 className="w-4 h-4 text-muted-foreground" />
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-16 h-1.5 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:transition-transform"
                        style={{
                            background: `linear-gradient(to right, hsl(var(--primary)) ${volume * 100}%, hsl(var(--muted)) ${volume * 100}%)`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
