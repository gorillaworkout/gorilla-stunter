"use client"

import { useRef, useState, useMemo, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei"
import { Suspense } from "react"
import * as THREE from "three"

export interface TShirtImages {
  front: string
  back: string
}

function ProductImageModel({
  images,
  isHovered,
}: {
  images: TShirtImages
  isHovered: boolean
}) {
  const groupRef = useRef<THREE.Group>(null)
  const loader = useMemo(() => new THREE.TextureLoader(), [])

  const [frontTex, setFrontTex] = useState<THREE.Texture | null>(null)
  const [backTex, setBackTex] = useState<THREE.Texture | null>(null)
  const [aspect, setAspect] = useState(2 / 3)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false

    const loadTex = (url: string): Promise<THREE.Texture | null> =>
      new Promise((resolve) => {
        loader.load(
          url,
          (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace
            tex.minFilter = THREE.LinearMipmapLinearFilter
            tex.magFilter = THREE.LinearFilter
            tex.anisotropy = 16
            tex.generateMipmaps = true
            if (!cancelled) resolve(tex)
          },
          undefined,
          () => { if (!cancelled) resolve(null) }
        )
      })

    async function loadAll() {
      const [f, b] = await Promise.all([
        loadTex(images.front),
        loadTex(images.back),
      ])
      if (cancelled) return

      if (f) {
        const imgAspect = f.image.width / f.image.height
        setAspect(imgAspect)
        setFrontTex(f)
      }
      if (b) setBackTex(b)
      setLoaded(true)
    }

    loadAll()
    return () => { cancelled = true }
  }, [images, loader])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.03
    if (!isHovered) {
      groupRef.current.rotation.y += 0.005
    }
  })

  if (!loaded) return null

  const planeHeight = 2.6
  const planeWidth = planeHeight * aspect
  const depth = 0.06

  return (
    <group ref={groupRef}>
      {frontTex && (
        <mesh position={[0, 0, depth / 2 + 0.001]} castShadow>
          <planeGeometry args={[planeWidth, planeHeight]} />
          <meshStandardMaterial
            map={frontTex}
            transparent
            alphaTest={0.1}
            roughness={0.6}
            metalness={0.0}
            side={THREE.FrontSide}
            envMapIntensity={0.3}
          />
        </mesh>
      )}

      {backTex && (
        <mesh position={[0, 0, -(depth / 2 + 0.001)]} rotation={[0, Math.PI, 0]} castShadow>
          <planeGeometry args={[planeWidth, planeHeight]} />
          <meshStandardMaterial
            map={backTex}
            transparent
            alphaTest={0.1}
            roughness={0.6}
            metalness={0.0}
            side={THREE.FrontSide}
            envMapIntensity={0.3}
          />
        </mesh>
      )}

      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[planeWidth * 0.98, planeHeight * 0.98, depth]} />
        <meshStandardMaterial
          color="#111111"
          roughness={0.9}
          metalness={0.0}
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  )
}

function FallbackModel({ color, isHovered }: { color: string; isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const tshirtColor = new THREE.Color(color)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.03
    if (!isHovered) groupRef.current.rotation.y += 0.005
  })

  return (
    <group ref={groupRef}>
      <mesh castShadow>
        <boxGeometry args={[1.7, 2.6, 0.08]} />
        <meshStandardMaterial color={tshirtColor} roughness={0.75} metalness={0.02} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, 0.15, 0.045]}>
        <planeGeometry args={[0.85, 0.32]} />
        <meshStandardMaterial
          color="#FFD700"
          roughness={0.25}
          metalness={0.65}
          emissive="#FFD700"
          emissiveIntensity={0.12}
        />
      </mesh>
      <mesh position={[0, 0.15, 0.048]}>
        <ringGeometry args={[0.06, 0.09, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          roughness={0.2}
          metalness={0.8}
          emissive="#FFD700"
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  )
}

function Scene({
  images,
  fallbackColor,
  isHovered,
  onHover,
}: {
  images?: TShirtImages
  fallbackColor: string
  isHovered: boolean
  onHover: (val: boolean) => void
}) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.0} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <directionalLight position={[-4, 4, -3]} intensity={0.4} />
      <spotLight position={[0, 8, 5]} intensity={0.5} angle={0.3} penumbra={0.8} castShadow />

      <group
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
      >
        {images ? (
          <ProductImageModel images={images} isHovered={isHovered} />
        ) : (
          <FallbackModel color={fallbackColor} isHovered={isHovered} />
        )}
      </group>

      <ContactShadows position={[0, -1.6, 0]} opacity={0.35} scale={6} blur={3} far={5} />
      <Environment preset="city" />

      <OrbitControls
        enablePan={false}
        enableZoom
        minDistance={1.8}
        maxDistance={7}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 1.4}
        autoRotate={!isHovered}
        autoRotateSpeed={1.5}
        dampingFactor={0.08}
        enableDamping
      />
    </>
  )
}

function CameraController({
  zoomAction,
  onZoomHandled,
}: {
  zoomAction: "in" | "out" | "reset" | null
  onZoomHandled: () => void
}) {
  const { camera } = useThree()

  useFrame(() => {
    if (!zoomAction) return
    const dir = camera.position.clone().normalize()

    if (zoomAction === "in") {
      camera.position.copy(dir.multiplyScalar(Math.max(1.8, camera.position.length() - 0.5)))
    } else if (zoomAction === "out") {
      camera.position.copy(dir.multiplyScalar(Math.min(7, camera.position.length() + 0.5)))
    } else if (zoomAction === "reset") {
      camera.position.set(0, 0, 4)
    }
    onZoomHandled()
  })

  return null
}

function ZoomControls({
  onZoomIn,
  onZoomOut,
  onReset,
}: {
  onZoomIn: () => void
  onZoomOut: () => void
  onReset: () => void
}) {
  return (
    <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
      <button
        onClick={onZoomIn}
        className="w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-200 hover:scale-110"
        aria-label="Zoom in"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
        </svg>
      </button>
      <button
        onClick={onZoomOut}
        className="w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-200 hover:scale-110"
        aria-label="Zoom out"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12" />
        </svg>
      </button>
      <button
        onClick={onReset}
        className="w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-200 hover:scale-110"
        aria-label="Reset view"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
    </div>
  )
}

export default function TShirt3DViewer({
  color = "#1a1a1a",
  images,
  className = "",
}: {
  color?: string
  images?: TShirtImages
  className?: string
}) {
  const [zoomAction, setZoomAction] = useState<"in" | "out" | "reset" | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`relative w-full h-full min-h-[400px] ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene
            images={images}
            fallbackColor={color}
            isHovered={isHovered}
            onHover={setIsHovered}
          />
          <CameraController
            zoomAction={zoomAction}
            onZoomHandled={() => setZoomAction(null)}
          />
        </Suspense>
      </Canvas>
      <ZoomControls
        onZoomIn={() => setZoomAction("in")}
        onZoomOut={() => setZoomAction("out")}
        onReset={() => setZoomAction("reset")}
      />
      <div className="absolute bottom-4 left-4 z-10">
        <p className="text-xs text-muted-foreground font-body bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
          Drag to rotate &bull; Scroll to zoom
        </p>
      </div>
    </div>
  )
}
