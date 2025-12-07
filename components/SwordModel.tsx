"use client";

import React, { useRef, JSX, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import type { Object3D } from "three";
import * as THREE from "three";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const ref = useRef<Object3D | null>(null);
  const gltf = useGLTF("/models/arise_solo_leveling.glb");

  useEffect(() => {
    if (ref.current && gltf?.scene) {
      gltf.scene.traverse((child: any) => {
        if (child instanceof THREE.Mesh && child.material) {
          // Enhance material properties - check if property exists first
          if ('metalness' in child.material) {
            child.material.metalness = 0.7;
          }
          if ('roughness' in child.material) {
            child.material.roughness = 0.3;
          }
          if ('envMapIntensity' in child.material) {
            child.material.envMapIntensity = 1.2;
          }
          
          // Enable shadows
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [gltf.scene]);

  return <primitive ref={ref} object={gltf.scene} {...props} dispose={null} />;
}

useGLTF.preload("/models/arise_solo_leveling.glb");
