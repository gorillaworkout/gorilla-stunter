export type TrackCategory = "Groupstunt" | "Partnerstunt" | "Team Cheer" | "Dance"

export interface Track {
    id: string
    title: string
    category: TrackCategory
    duration: string
    mood: string
    djName: string
    coverImage: string
    previewAudio: string
    description: string
    featured?: boolean
}

export const TRACKS: Track[] = [
    {
        id: "gs-opening",
        title: "Gorilla Stunter",
        category: "Team Cheer",
        duration: "0:17",
        mood: "Energetic",
        djName: "Ardidra",
        coverImage: "/music/covers/gs_opening.jpg",
        previewAudio: "/music/previews/gs_opening.mp3",
        description: "Opening track with powerful build-ups and drops for full squad performances.",
        featured: true,
    },
    {
        id: "gorillamother",
        title: "Gorilla Stunter",
        category: "Groupstunt",
        duration: "0:12",
        mood: "Fierce",
        djName: "Ardidra",
        coverImage: "/music/covers/gs_routine_mix.jpg",
        previewAudio: "/music/previews/gorillamother.mp3",
        description: "A fierce beat designed for powerful stunt sequences.",
    },
    {
        id: "20sec",
        title: "Gorilla Stunter",
        category: "Groupstunt",
        duration: "0:22",
        mood: "Fierce",
        djName: "Ardidra",
        coverImage: "/music/covers/gs_routine_mix.jpg",
        previewAudio: "/music/previews/20sec.mp3",
        description: "A fierce beat designed for powerful stunt sequences.",
    }
]