"use client"

import { useState, useEffect, useRef } from "react"
import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AudioPlayer from "@/components/audio-player"
import WaveformVisualizer from "@/components/waveform-visualizer"
import MiniPlayer from "@/components/mini-player"
import { TRACKS, type TrackCategory } from "@/lib/tracks"
import { Music, Headphones, Users, Dumbbell, PartyPopper, MessageCircle, ChevronRight, Sparkles, Filter } from "lucide-react"

const CATEGORIES: { name: TrackCategory; icon: React.ReactNode; description: string }[] = [
    {
        name: "Groupstunt",
        icon: <Users className="w-6 h-6" />,
        description: "High-impact beats for synchronized group stunt sequences.",
    },
    {
        name: "Partnerstunt",
        icon: <Dumbbell className="w-6 h-6" />,
        description: "Sharp transitions and punchy drops for partner routines.",
    },
    {
        name: "Team Cheer",
        icon: <Music className="w-6 h-6" />,
        description: "Anthemic arrangements for full squad performances.",
    },
    {
        name: "Dance",
        icon: <PartyPopper className="w-6 h-6" />,
        description: "Groove-forward tracks for dance choreography blocks.",
    },
]

const CATEGORY_COLORS: Record<TrackCategory, string> = {
    Groupstunt: "bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20",
    Partnerstunt: "bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20",
    "Team Cheer": "bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20",
    Dance: "bg-purple-500/10 text-purple-500 border-purple-500/20 hover:bg-purple-500/20",
}

const CATEGORY_ACTIVE_COLORS: Record<TrackCategory, string> = {
    Groupstunt: "bg-red-500 text-white border-red-500",
    Partnerstunt: "bg-blue-500 text-white border-blue-500",
    "Team Cheer": "bg-amber-500 text-white border-amber-500",
    Dance: "bg-purple-500 text-white border-purple-500",
}

const STEPS = [
    {
        number: "01",
        title: "Choose Category",
        description: "Pick your routine type: Groupstunt, Partnerstunt, Team Cheer, or Dance.",
    },
    {
        number: "02",
        title: "Send Brief",
        description: "Tell us your vision via WhatsApp — mood, BPM, duration, and routine highlights.",
    },
    {
        number: "03",
        title: "Draft Production",
        description: "Our DJ produces a custom draft tailored to your routine.",
    },
    {
        number: "04",
        title: "Review & Revise",
        description: "Listen to the draft and request adjustments until it's perfect.",
    },
    {
        number: "05",
        title: "Final Delivery",
        description: "Receive your high-quality final mix, ready for competition or performance.",
    },
]

export default function MusicPage() {
    const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null)
    const [activeFilter, setActiveFilter] = useState<TrackCategory | "All">("All")
    const [showMiniPlayer, setShowMiniPlayer] = useState(false)
    const portfolioRef = useRef<HTMLElement>(null)

    // Show mini player when user scrolls past the playing track
    useEffect(() => {
        if (!currentlyPlaying) {
            setShowMiniPlayer(false)
            return
        }

        const handleScroll = () => {
            const section = portfolioRef.current
            if (!section) return
            const rect = section.getBoundingClientRect()
            // Show mini player when portfolio section is scrolled out of view
            setShowMiniPlayer(rect.bottom < 0)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [currentlyPlaying])

    const currentTrack = currentlyPlaying
        ? TRACKS.find(t => t.id === currentlyPlaying) || null
        : null

    const filteredTracks = activeFilter === "All"
        ? TRACKS
        : TRACKS.filter(t => t.category === activeFilter)

    const featuredTracks = filteredTracks.filter(t => t.featured)
    const nonFeaturedTracks = filteredTracks.filter(t => !t.featured)

    const handleRequestStyle = (trackTitle: string) => {
        const message = encodeURIComponent(
            `Hey Gorilla Beats! I'm interested in a custom mix similar to "${trackTitle}". Can we discuss further?`
        )
        window.open(`https://wa.me/6285133524900?text=${message}`, "_blank")
    }

    const handleCustomOrder = () => {
        const message = encodeURIComponent(
            "Hey Gorilla Beats! I'd like to order a custom cheer music track. Can you help me get started?"
        )
        window.open(`https://wa.me/6285133524900?text=${message}`, "_blank")
    }

    return (
        <main className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <AnimatedSection direction="up" className="text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-heading font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                            <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Custom Cheer Music
                        </div>
                        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl text-foreground mb-4 sm:mb-6">
                            Gorilla <span className="text-primary">Beats</span>
                        </h1>
                        <p className="font-body text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
                            Custom cheer music for{" "}
                            <span className="text-foreground font-semibold">Groupstunt</span>,{" "}
                            <span className="text-foreground font-semibold">Partnerstunt</span>,{" "}
                            <span className="text-foreground font-semibold">Team Cheer</span>, and{" "}
                            <span className="text-foreground font-semibold">Dance</span> routines.
                            Produced by professional DJs, tailored to your performance.
                        </p>
                        <button
                            onClick={handleCustomOrder}
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20"
                        >
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                            Order Custom Mix
                        </button>
                    </AnimatedSection>
                </div>
            </section>

            {/* Track Portfolio Section */}
            <section ref={portfolioRef} className="py-12 sm:py-20 px-4 sm:px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection direction="up" className="text-center mb-8 sm:mb-12">
                        <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-5xl text-foreground mb-3 sm:mb-4">
                            Preview <span className="text-primary">Portfolio</span>
                        </h2>
                        <p className="font-body text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                            Listen to sample tracks from our collection. Like what you hear? Request a custom mix in that style.
                        </p>
                    </AnimatedSection>

                    {/* Category Filter */}
                    <div className="mb-8 sm:mb-10">
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                            <button
                                onClick={() => setActiveFilter("All")}
                                className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-heading font-bold text-xs sm:text-sm border transition-all duration-200 ${
                                    activeFilter === "All"
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                                }`}
                            >
                                <Filter className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                All
                            </button>
                            {(Object.keys(CATEGORY_COLORS) as TrackCategory[]).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-heading font-bold text-xs sm:text-sm border transition-all duration-200 ${
                                        activeFilter === cat
                                            ? CATEGORY_ACTIVE_COLORS[cat]
                                            : CATEGORY_COLORS[cat]
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Track Grid */}
                    <div className="space-y-8 md:space-y-10">
                        {/* Featured Track */}
                        {featuredTracks.map((track, i) => (
                            <AnimatedSection key={track.id} direction="up" delay={i * 80}>
                                <Card
                                    className="relative overflow-hidden transition-all duration-500 group hover:-translate-y-2 border-2 border-primary bg-gradient-to-br from-primary/15 via-card to-accent/10 shadow-2xl shadow-primary/25 rounded-2xl py-0 gap-0"
                                >
                                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
                                    <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/30 blur-3xl transition-all duration-500 group-hover:bg-primary/40" />
                                    <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/25 blur-3xl transition-all duration-500 group-hover:bg-accent/35" />

                                    <CardContent className="relative z-10 p-0">
                                        <div className="grid lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr]">
                                            {/* Visual / Cover Art */}
                                            <div className="relative overflow-hidden bg-gradient-to-br from-foreground via-primary/90 to-accent min-h-[260px] sm:min-h-[320px]">
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_32%)]" />
                                                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,.35)_25%,rgba(255,255,255,.35)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.35)_75%)] bg-[length:28px_28px]" />

                                                <div className="absolute top-3 left-3 right-3 z-20 flex items-start justify-between gap-2 sm:top-4 sm:left-4 sm:right-4 md:top-5 md:left-5 md:right-5">
                                                    <Badge className="shrink-0 bg-background text-foreground border-0 shadow-lg font-heading font-bold backdrop-blur text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 leading-none">
                                                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                                                            <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                                                            <span>Featured</span>
                                                        </span>
                                                    </Badge>
                                                    <Badge variant="outline" className="shrink-0 border-background/40 bg-background/15 text-background backdrop-blur font-heading font-bold text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 leading-none">
                                                        {track.category}
                                                    </Badge>
                                                </div>

                                                <div className="absolute inset-0 flex items-center justify-center pt-6 sm:pt-8 lg:pt-0">
                                                    <div className="relative">
                                                        <div className={`absolute inset-0 rounded-full bg-background/25 blur-2xl scale-125 ${currentlyPlaying === track.id ? 'animate-pulse' : ''}`} />
                                                        <div className={`relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full border-[10px] sm:border-[12px] lg:border-[14px] border-background/20 bg-background/10 backdrop-blur-md flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${currentlyPlaying === track.id ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
                                                            <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-background flex items-center justify-center shadow-inner">
                                                                <Music className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-5 md:left-5 md:right-5">
                                                    <div className="rounded-xl sm:rounded-2xl bg-background/15 backdrop-blur-md border border-background/20 p-3 sm:p-4">
                                                        <p className="font-body text-[10px] sm:text-xs text-background/70 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-0.5 sm:mb-1">
                                                            Track Mood
                                                        </p>
                                                        <p className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-background leading-none">
                                                            {track.mood}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Track Info */}
                                            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                                                <div className="mb-4 sm:mb-5">
                                                    <p className="font-heading font-bold text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-2 sm:mb-3">
                                                        Featured Track
                                                    </p>
                                                    <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                                                        {track.title}
                                                    </h3>
                                                    <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mb-3 sm:mb-4">
                                                        {track.description}
                                                    </p>

                                                    {/* Compact meta row */}
                                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                                                        <span className="inline-flex items-center gap-1 rounded-lg bg-muted border border-border px-2.5 py-1 font-heading font-bold text-foreground">
                                                            {track.duration}
                                                            <span className="text-muted-foreground font-normal text-[10px] sm:text-xs ml-0.5">preview</span>
                                                        </span>
                                                        <span className="text-muted-foreground">•</span>
                                                        <span className="font-heading font-bold text-foreground">{track.category}</span>
                                                        <span className="text-muted-foreground">•</span>
                                                        <span className="font-heading font-bold text-foreground">{track.mood}</span>
                                                        <span className="text-muted-foreground">•</span>
                                                        <span className="font-body text-muted-foreground">{track.djName}</span>
                                                    </div>
                                                </div>

                                                {/* Waveform Visualizer - full width */}
                                                {currentlyPlaying === track.id && (
                                                    <div className="w-full h-10 sm:h-14 mb-4 sm:mb-5 rounded-xl bg-muted/50 border border-border p-1.5 sm:p-2 overflow-hidden">
                                                        <WaveformVisualizer
                                                            audioElement={null}
                                                            isPlaying={currentlyPlaying === track.id}
                                                            barCount={48}
                                                            className="h-full w-full"
                                                        />
                                                    </div>
                                                )}

                                                <div className="rounded-2xl sm:rounded-3xl bg-background border border-border p-3 sm:p-5 shadow-inner mb-4 sm:mb-6">
                                                    <AudioPlayer
                                                        audioUrl={track.previewAudio}
                                                        title={track.title}
                                                        onPlay={() => setCurrentlyPlaying(track.id)}
                                                        onPause={() => setCurrentlyPlaying(null)}
                                                        isPlaying={currentlyPlaying === track.id}
                                                    />
                                                </div>

                                                <button
                                                    onClick={() => handleRequestStyle(track.title)}
                                                    className="group/btn inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-primary px-5 sm:px-7 py-3 sm:py-4 font-heading font-black text-sm sm:text-base text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-accent hover:scale-[1.02]"
                                                >
                                                    Request This Style
                                                    <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}

                        {/* Non-Featured Tracks */}
                        {nonFeaturedTracks.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {nonFeaturedTracks.map((track, i) => (
                                    <AnimatedSection key={track.id} direction="up" delay={i * 80}>
                                        <Card className="relative overflow-hidden border border-border/80 bg-card shadow-lg shadow-foreground/5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-2 h-full flex flex-col rounded-2xl py-0 gap-0">
                                            <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/15" />
                                            <div className="absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />

                                            <CardContent className="relative z-10 p-0 flex flex-col flex-1">
                                                {/* Cover Art */}
                                                <div className="relative overflow-hidden bg-gradient-to-br from-foreground via-primary/90 to-accent h-40 sm:h-48">
                                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_32%)]" />
                                                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,.35)_25%,rgba(255,255,255,.35)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.35)_75%)] bg-[length:28px_28px]" />

                                                    <div className="absolute top-3 left-3">
                                                        <Badge className="bg-background/80 text-foreground border-0 font-heading font-bold backdrop-blur text-[10px] sm:text-xs">
                                                            Portfolio Sample
                                                        </Badge>
                                                    </div>
                                                    <div className="absolute top-3 right-3">
                                                        <Badge variant="outline" className="border-background/40 bg-background/15 text-background backdrop-blur font-heading font-bold text-[10px] sm:text-xs">
                                                            {track.category}
                                                        </Badge>
                                                    </div>

                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="relative">
                                                            <div className={`absolute inset-0 rounded-full bg-background/25 blur-2xl scale-125 ${currentlyPlaying === track.id ? 'animate-pulse' : ''}`} />
                                                            <div className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-full border-[8px] sm:border-[10px] border-background/20 bg-background/10 backdrop-blur-md flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${currentlyPlaying === track.id ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
                                                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-background flex items-center justify-center shadow-inner">
                                                                    <Music className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Track Info */}
                                                <div className="flex flex-col flex-1 p-3.5 sm:p-5">
                                                    <div className="mb-2 sm:mb-3">
                                                        <h3 className="font-heading font-black text-lg sm:text-2xl text-foreground mb-1 sm:mb-1.5 group-hover:text-primary transition-colors">
                                                            {track.title}
                                                        </h3>
                                                        <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                                            {track.description}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                                        <Badge variant="outline" className="text-[10px] sm:text-xs font-heading font-bold">
                                                            {track.mood}
                                                        </Badge>
                                                        <span className="text-muted-foreground text-xs">•</span>
                                                        <span className="font-heading font-bold text-xs sm:text-sm text-foreground">{track.duration}</span>
                                                        <span className="text-muted-foreground text-xs">•</span>
                                                        <span className="font-body text-[10px] sm:text-xs text-muted-foreground">{track.djName}</span>
                                                    </div>

                                                    {/* Waveform for non-featured */}
                                                    {currentlyPlaying === track.id && (
                                                        <div className="w-full h-8 sm:h-10 mb-2 sm:mb-3 rounded-lg bg-muted/50 border border-border p-1 sm:p-1.5 overflow-hidden">
                                                            <WaveformVisualizer
                                                                audioElement={null}
                                                                isPlaying={currentlyPlaying === track.id}
                                                                barCount={28}
                                                                className="h-full w-full"
                                                            />
                                                        </div>
                                                    )}

                                                    <div className="mt-auto">
                                                        <div className="rounded-xl sm:rounded-2xl bg-background border border-border p-2.5 sm:p-3 shadow-inner mb-2.5 sm:mb-3">
                                                            <AudioPlayer
                                                                audioUrl={track.previewAudio}
                                                                title={track.title}
                                                                onPlay={() => setCurrentlyPlaying(track.id)}
                                                                onPause={() => setCurrentlyPlaying(null)}
                                                                isPlaying={currentlyPlaying === track.id}
                                                            />
                                                        </div>

                                                        <button
                                                            onClick={() => handleRequestStyle(track.title)}
                                                            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 sm:px-5 py-2.5 sm:py-3 font-heading font-bold text-xs sm:text-sm text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-accent hover:scale-[1.02]"
                                                        >
                                                            Request This Style
                                                            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </AnimatedSection>
                                ))}
                            </div>
                        )}

                        {/* Empty state when filter has no results */}
                        {filteredTracks.length === 0 && (
                            <div className="text-center py-12">
                                <Music className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                                <p className="font-heading font-bold text-lg text-muted-foreground">
                                    No tracks in this category yet
                                </p>
                                <p className="font-body text-sm text-muted-foreground/70 mt-1">
                                    Try selecting a different category or view all tracks.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection direction="up" className="text-center mb-8 sm:mb-12">
                        <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-5xl text-foreground mb-3 sm:mb-4">
                            Custom For Your <span className="text-primary">Routine</span>
                        </h2>
                        <p className="font-body text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                            Every routine is unique. We produce music tailored to your specific category and style.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {CATEGORIES.map((cat, i) => (
                            <AnimatedSection key={cat.name} direction="up" delay={i * 100}>
                                <Card className="bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer h-full">
                                    <CardContent className="p-4 sm:p-6 text-center">
                                        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                                            {cat.icon}
                                        </div>
                                        <h3 className="font-heading font-bold text-sm sm:text-lg text-foreground mb-1 sm:mb-2">{cat.name}</h3>
                                        <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed hidden sm:block">
                                            {cat.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 bg-muted">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection direction="up" className="text-center mb-10 sm:mb-16">
                        <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-5xl text-foreground mb-3 sm:mb-4">
                            How Custom Order <span className="text-primary">Works</span>
                        </h2>
                        <p className="font-body text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                            From idea to final mix — here's how we bring your routine music to life.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                        {STEPS.map((step, i) => (
                            <AnimatedSection key={step.number} direction="up" delay={i * 100}>
                                <div className="text-center group">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                                        <span className="font-heading font-black text-lg sm:text-2xl text-primary-foreground">
                                            {step.number}
                                        </span>
                                    </div>
                                    <h3 className="font-heading font-bold text-sm sm:text-lg text-foreground mb-1 sm:mb-2">{step.title}</h3>
                                    <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <AnimatedSection direction="up">
                <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-primary to-accent">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-6xl text-primary-foreground mb-4 sm:mb-6">
                            Ready to Build Your Routine Music?
                        </h2>
                        <p className="font-body text-base sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                            Get a custom cheer music track produced by professional DJs. Tailored to your routine, your style, your performance.
                        </p>
                        <button
                            onClick={handleCustomOrder}
                            className="inline-flex items-center gap-2 bg-background hover:bg-muted text-foreground font-heading font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                            Order via WhatsApp
                        </button>
                    </div>
                </section>
            </AnimatedSection>

            {/* Footer */}
            <footer className="bg-foreground text-background py-10 sm:py-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                        <div className="sm:col-span-2">
                            <h3 className="font-heading font-black text-2xl sm:text-3xl text-primary mb-3 sm:mb-4">GORILLA STUNTER</h3>
                            <p className="font-body text-sm sm:text-base text-background/80 leading-relaxed mb-4 sm:mb-6 max-w-md">
                                Elite cheerleading stunt partner community dedicated to excellence, precision, and teamwork. Where
                                champions are forged through dedication and skill.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-heading font-bold text-base sm:text-lg text-background mb-3 sm:mb-4">Quick Links</h4>
                            <ul className="space-y-1.5 sm:space-y-2 font-body text-sm sm:text-base text-background/80">
                                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                                <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                                <li><a href="/music" className="hover:text-primary transition-colors">Gorilla Beats</a></li>
                                <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-heading font-bold text-base sm:text-lg text-background mb-3 sm:mb-4">Contact Info</h4>
                            <ul className="space-y-1.5 sm:space-y-2 font-body text-sm sm:text-base text-background/80">
                                <li>Email: darmawanbayu1@gmail.com</li>
                                <li>Phone: (62) 851-3352-4900</li>
                                <li>
                                    Address: Jl. Bulungan No.1, RT.11/RW.7
                                    <br />Kramat Pela, Kec. Kby. Baru
                                    <br />Kota Jakarta Selatan, DKI Jakarta 12130
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-background/20 pt-6 sm:pt-8 text-center">
                        <p className="font-body text-xs sm:text-sm text-background/60">
                            Copyright 2024 Gorilla Stunter. All rights reserved. Built with precision and excellence.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Mini Sticky Player */}
            <MiniPlayer
                track={currentTrack}
                isPlaying={!!currentlyPlaying}
                onTogglePlay={() => {
                    if (currentlyPlaying) {
                        setCurrentlyPlaying(null)
                    }
                }}
                onClose={() => setCurrentlyPlaying(null)}
                visible={showMiniPlayer}
            />
        </main>
    )
}
