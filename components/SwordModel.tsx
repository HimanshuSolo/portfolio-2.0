"use client";

import React, { useRef, JSX, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import type { Group } from "three";
import * as THREE from "three";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const ref = useRef<Group | null>(null);
  const gltf = useGLTF("/models/arise_solo_leveling.glb");

  useEffect(() => {
    if (ref.current) {
      ref.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Enhance material properties
          child.material.metalness = 0.7;
          child.material.roughness = 0.3;
          child.material.envMapIntensity = 1.2;
          
          // Enable shadows
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, []);

  return <primitive ref={ref} object={gltf.scene} {...props} dispose={null} />;
}

useGLTF.preload("/models/arise_solo_leveling.glb");
