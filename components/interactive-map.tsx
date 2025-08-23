"use client"

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

export default function InteractiveMap() {
  const [isClient, setIsClient] = useState(false)
  const [customIcon, setCustomIcon] = useState<any>(null)
  
  // Gorilla Stunter coordinates (approximate for Jakarta)
  const position: [number, number] = [-6.243013218649762, 106.79690270638021] // Jakarta coordinates
  
  useEffect(() => {
    setIsClient(true)
    
    // Import Leaflet only on client side
    const loadLeaflet = async () => {
      const L = await import('leaflet')
      
      // Fix for default markers in React Leaflet
      const icon = new L.Icon({
        iconUrl: '/new_logo_gs.png',
        iconSize: [60, 60],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      })
      
      setCustomIcon(icon)
    }
    
    loadLeaflet()
  }, [])

  // Don't render anything until client-side
  if (!isClient || !customIcon) {
    return (
      <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg bg-muted flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <p className="font-body text-muted-foreground">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={15}
        className="w-full h-full min-h-[400px]"
        style={{ height: '400px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-heading font-bold text-lg text-primary mb-2">
                GORILLA STUNTER
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-2">
                Elite Cheerleading Stunt Partner Community
              </p>
              <p className="font-body text-xs text-muted-foreground">
                Jl. Bulungan No.1, RT.11/RW.7<br />
                Kramat Pela, Kec. Kby. Baru<br />
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
