"use client";

import { Suspense, useRef, useState, useEffect, Component, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useGLTF,
  Html,
  Float,
} from "@react-three/drei";
import type * as THREE from "three";

/* ── Error boundary to catch WebGL failures ── */
class WebGLErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: ReactNode; children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/* ── Check if WebGL is available ── */
function useWebGLSupport() {
  const [supported, setSupported] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ctx =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      setSupported(!!ctx);
    } catch {
      setSupported(false);
    }
  }, []);
  return supported;
}

/* ── Static fallback when WebGL is not available ── */
function StaticFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-weave-gray-50 rounded-2xl border border-weave-gray-100">
      <div className="text-center px-8">
        <div className="w-24 h-24 mx-auto mb-6 relative">
          {/* Stylized robot silhouette */}
          <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
            <rect x="28" y="10" width="40" height="20" rx="4" fill="#E5E5E5" />
            <circle cx="48" cy="20" r="4" fill="#F26522" />
            <rect x="36" y="8" width="24" height="4" rx="2" fill="#D4D4D4" />
            <rect x="24" y="32" width="48" height="36" rx="6" fill="#F5F5F5" stroke="#E5E5E5" strokeWidth="1.5" />
            <rect x="10" y="36" width="12" height="4" rx="2" fill="#E5E5E5" />
            <rect x="6" y="44" width="8" height="3" rx="1.5" fill="#F26522" />
            <rect x="74" y="36" width="12" height="4" rx="2" fill="#E5E5E5" />
            <rect x="82" y="44" width="8" height="3" rx="1.5" fill="#F26522" />
            <rect x="32" y="70" width="32" height="8" rx="4" fill="#262626" />
            <rect x="30" y="78" width="36" height="3" rx="1.5" fill="#F26522" opacity="0.6" />
          </svg>
        </div>
        <p className="text-[15px] font-display font-semibold text-weave-black mb-1">
          Isaac 0
        </p>
        <p className="text-[13px] text-weave-gray-400">
          3D model &middot; interactive viewer
        </p>
      </div>
    </div>
  );
}

/* ── GLB model loader ── */
function IsaacModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/isaac.glb");

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={4}
        position={[0, -0.5, 0]}
        dispose={null}
      />
    </group>
  );
}

/* ── Loading spinner inside Canvas ── */
function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-2 border-weave-gray-200 rounded-full" />
          <div className="absolute inset-0 border-2 border-weave-orange border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-[13px] text-weave-gray-400 font-mono tracking-wide">
          Loading Isaac...
        </p>
      </div>
    </Html>
  );
}

/* ── Placeholder 3D robot ── */
function PlaceholderRobot() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group position={[0, -0.5, 0]}>
        {/* Torso */}
        <mesh position={[0, 1.2, 0]}>
          <capsuleGeometry args={[0.35, 0.8, 16, 32]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.3} roughness={0.4} />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 2.0, 0]}>
          <cylinderGeometry args={[0.08, 0.12, 0.3, 16]} />
          <meshStandardMaterial color="#d4d4d4" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Head */}
        <mesh position={[0, 2.35, 0]}>
          <boxGeometry args={[0.4, 0.25, 0.3]} />
          <meshStandardMaterial color="#262626" metalness={0.5} roughness={0.4} />
        </mesh>
        {/* Camera lens */}
        <mesh position={[0, 2.35, 0.16]}>
          <circleGeometry args={[0.06, 32]} />
          <meshStandardMaterial color="#F26522" emissive="#F26522" emissiveIntensity={0.5} />
        </mesh>

        {/* Left arm */}
        <group position={[-0.5, 1.5, 0]} rotation={[0, 0, -0.3]}>
          <mesh position={[0, -0.3, 0]}>
            <capsuleGeometry args={[0.06, 0.5, 8, 16]} />
            <meshStandardMaterial color="#e5e5e5" metalness={0.4} roughness={0.35} />
          </mesh>
          <mesh position={[0, -0.6, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#a3a3a3" metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[-0.1, -0.95, 0]} rotation={[0, 0, -0.2]}>
            <capsuleGeometry args={[0.05, 0.45, 8, 16]} />
            <meshStandardMaterial color="#e5e5e5" metalness={0.4} roughness={0.35} />
          </mesh>
          <mesh position={[-0.15, -1.3, 0.04]}>
            <boxGeometry args={[0.04, 0.12, 0.02]} />
            <meshStandardMaterial color="#F26522" metalness={0.3} roughness={0.5} />
          </mesh>
          <mesh position={[-0.15, -1.3, -0.04]}>
            <boxGeometry args={[0.04, 0.12, 0.02]} />
            <meshStandardMaterial color="#F26522" metalness={0.3} roughness={0.5} />
          </mesh>
        </group>

        {/* Right arm */}
        <group position={[0.5, 1.5, 0]} rotation={[0, 0, 0.3]}>
          <mesh position={[0, -0.3, 0]}>
            <capsuleGeometry args={[0.06, 0.5, 8, 16]} />
            <meshStandardMaterial color="#e5e5e5" metalness={0.4} roughness={0.35} />
          </mesh>
          <mesh position={[0, -0.6, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#a3a3a3" metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[0.1, -0.95, 0]} rotation={[0, 0, 0.2]}>
            <capsuleGeometry args={[0.05, 0.45, 8, 16]} />
            <meshStandardMaterial color="#e5e5e5" metalness={0.4} roughness={0.35} />
          </mesh>
          <mesh position={[0.15, -1.3, 0.04]}>
            <boxGeometry args={[0.04, 0.12, 0.02]} />
            <meshStandardMaterial color="#F26522" metalness={0.3} roughness={0.5} />
          </mesh>
          <mesh position={[0.15, -1.3, -0.04]}>
            <boxGeometry args={[0.04, 0.12, 0.02]} />
            <meshStandardMaterial color="#F26522" metalness={0.3} roughness={0.5} />
          </mesh>
        </group>

        {/* Base */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.5, 0.55, 0.15, 32]} />
          <meshStandardMaterial color="#262626" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.05, 32]} />
          <meshStandardMaterial color="#F26522" metalness={0.3} roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Main export ── */
interface RobotViewerProps {
  className?: string;
}

export default function RobotViewer({ className = "" }: RobotViewerProps) {
  const hasModel = true;
  const webglSupported = useWebGLSupport();

  // Still checking
  if (webglSupported === null) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-12 h-12 border-2 border-weave-gray-200 border-t-weave-orange rounded-full animate-spin" />
      </div>
    );
  }

  // WebGL not available — show static fallback
  if (!webglSupported) {
    return (
      <div className={className}>
        <StaticFallback />
      </div>
    );
  }

  return (
    <div className={`canvas-container ${className}`}>
      <WebGLErrorBoundary fallback={<StaticFallback />}>
        <Canvas
          camera={{ position: [4, 3, 6], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 8, 5]} intensity={1} castShadow />
          <directionalLight position={[-3, 4, -4]} intensity={0.3} />
          <pointLight position={[0, 3, 0]} intensity={0.2} color="#F26522" />

          <Suspense fallback={<LoadingFallback />}>
            {hasModel ? <IsaacModel /> : <PlaceholderRobot />}
            <ContactShadows
              position={[0, 0.17, 0]}
              opacity={0.25}
              scale={8}
              blur={2.5}
              far={4}
              color="#0A0A0A"
            />
            <Environment preset="studio" />
          </Suspense>

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.9}
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
