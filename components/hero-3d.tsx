"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Text3D, Float } from "@react-three/drei"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import LoadingSpinner from "@/components/loading-spinner"

function CheerleaderScene() {
  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Floating 3D Text */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={1.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-3, 2, 0]}
        >
          ELITE
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </Text3D>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={1.2}
          height={0.15}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-2.5, 0, 0]}
        >
          STUNTERS
          <meshStandardMaterial color="#D4AF37" metalness={0.6} roughness={0.3} />
        </Text3D>
      </Float>

      {/* Animated geometric shapes representing movement */}
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[4, 1, -2]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh position={[-4, -1, -1]} rotation={[Math.PI / 3, 0, 0]}>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.7} roughness={0.2} />
        </mesh>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

function Scene3DFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="font-heading font-semibold text-foreground mt-4">Loading 3D Experience...</p>
      </div>
    </div>
  )
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Suspense fallback={null}>
            <CheerleaderScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-tight animate-fade-in-up">
            GORILLA
            <span className="block text-primary animate-fade-in-up animate-delay-100">STUNTER</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Elite cheerleading stunt partner community dedicated to excellence, precision, and teamwork. Where champions
            are forged through dedication and skill.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-300">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground font-heading font-bold text-lg px-8 py-4 btn-hover-lift"
            >
              Join Our Community
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold text-lg px-8 py-4 bg-transparent btn-hover-lift"
            >
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center cursor-pointer hover:border-accent transition-colors duration-300">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
