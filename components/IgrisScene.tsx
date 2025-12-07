"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, PerspectiveCamera, Environment } from "@react-three/drei";
import Model from "./SwordModel";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("3D Model Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Html center><div className="text-red-400 text-sm">Failed to load 3D model</div></Html>;
    }

    return this.props.children;
  }
}

export default function Scene() {
  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden">
      <Canvas 
        shadows 
        camera={{ position: [2, 0, 3], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          toneMappingExposure: 1.2,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
          preserveDrawingBuffer: false,
        }}
        onCreated={(state) => {
          state.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
      >
        <PerspectiveCamera makeDefault position={[5, 0, 10]} fov={45} />
        
        <Environment preset="dawn" />
        
        <directionalLight 
          castShadow 
          position={[6, 8, 6]} 
          intensity={1.2}
          color="#6366f1"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        
        <directionalLight 
          position={[-6, 4, 5]} 
          intensity={0.6}
          color="#a855f7"
        />
        
        <directionalLight 
          position={[0, 2, -8]} 
          intensity={0.8}
          color="#ffffff"
        />
        
        <ambientLight intensity={0.4} color="#4c1d95" />
        
        <pointLight position={[-5, 5, 5]} intensity={0.4} color="#6366f1" />
        <pointLight position={[5, 3, -5]} intensity={0.3} color="#ec4899" />
        
        <Suspense fallback={<Html center><div className="text-white text-sm">Loading model...</div></Html>}>
          <ErrorBoundary>
            <Model position={[0, -0.5, 0]} scale={1.5} rotation={[0, Math.PI / 4, 0]} />
          </ErrorBoundary>
        </Suspense>
        
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          autoRotate
          autoRotateSpeed={3}
          maxPolarAngle={Math.PI * 0.75}
          minPolarAngle={Math.PI * 0.25}
        />
      </Canvas>
    </div>
  );
}
