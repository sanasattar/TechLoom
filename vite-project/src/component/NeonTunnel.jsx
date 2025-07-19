import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const NeonTunnel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x800080,
      emissive: 0x400080,
      emissiveIntensity: 0.8,
      side: THREE.DoubleSide,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 5);
    scene.add(light);

    camera.position.z = 20;

    const animate = () => {
      requestAnimationFrame(animate);

      // Add rotation for a "moving" effect
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", inset: 0, zIndex: -1 }} />;
};

export default NeonTunnel;
