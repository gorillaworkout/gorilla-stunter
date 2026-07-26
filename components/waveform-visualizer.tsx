"use client"

import { useRef, useEffect, useState } from "react"

interface WaveformVisualizerProps {
    audioElement: HTMLAudioElement | null
    isPlaying: boolean
    barCount?: number
    className?: string
}

export default function WaveformVisualizer({
    audioElement,
    isPlaying,
    barCount = 32,
    className = "",
}: WaveformVisualizerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>(0)
    const analyserRef = useRef<AnalyserNode | null>(null)
    const contextRef = useRef<AudioContext | null>(null)
    const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
    const connectedAudioRef = useRef<HTMLAudioElement | null>(null)
    const [bars, setBars] = useState<number[]>(Array(barCount).fill(0))

    // Connect audio element to Web Audio API
    useEffect(() => {
        if (!audioElement) return
        // Avoid reconnecting the same element
        if (connectedAudioRef.current === audioElement) return

        try {
            if (!contextRef.current) {
                contextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
            }

            const ctx = contextRef.current

            // Create analyser
            const analyser = ctx.createAnalyser()
            analyser.fftSize = 128
            analyser.smoothingTimeConstant = 0.7
            analyserRef.current = analyser

            // Create source from audio element (can only be done once per element)
            const source = ctx.createMediaElementSource(audioElement)
            source.connect(analyser)
            analyser.connect(ctx.destination)
            sourceRef.current = source
            connectedAudioRef.current = audioElement
        } catch {
            // Audio element may already be connected, that's ok
        }
    }, [audioElement])

    // Animation loop
    useEffect(() => {
        const analyser = analyserRef.current
        if (!analyser) {
            // Generate fake bars when no analyser
            if (isPlaying) {
                const interval = setInterval(() => {
                    setBars(prev => prev.map(() => Math.random() * 0.6 + 0.2))
                }, 100)
                return () => clearInterval(interval)
            } else {
                setBars(Array(barCount).fill(0.05))
            }
            return
        }

        if (!isPlaying) {
            setBars(Array(barCount).fill(0.05))
            return
        }

        // Resume audio context if suspended
        if (contextRef.current?.state === "suspended") {
            contextRef.current.resume()
        }

        const dataArray = new Uint8Array(analyser.frequencyBinCount)

        const animate = () => {
            analyser.getByteFrequencyData(dataArray)

            const step = Math.floor(dataArray.length / barCount)
            const newBars: number[] = []
            for (let i = 0; i < barCount; i++) {
                const index = i * step
                const value = dataArray[index] / 255
                newBars.push(Math.max(0.05, value))
            }
            setBars(newBars)
            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationRef.current)
        }
    }, [isPlaying, barCount])

    return (
        <div className={`flex items-end justify-center gap-[2px] sm:gap-[3px] ${className}`}>
            {bars.map((height, i) => (
                <div
                    key={i}
                    className={`rounded-full transition-all duration-100 ${
                        isPlaying ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    style={{
                        width: `${100 / barCount - 1}%`,
                        minWidth: "2px",
                        maxWidth: "4px",
                        height: `${Math.max(4, height * 100)}%`,
                        opacity: isPlaying ? 0.6 + height * 0.4 : 0.3,
                    }}
                />
            ))}
        </div>
    )
}
