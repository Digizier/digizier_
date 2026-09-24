"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Hero3DCanvas
 * Built following 3dviz-pro-max & Zero-Load standards.
 * - Interactive 3D Agentic Constellation & Neural Core
 * - Tracks mouse with smooth damping
 * - Auto-pauses render loop when offscreen or tab is hidden (0% CPU idle waste)
 * - Safe WebGL resource cleanup on unmount
 */
export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    let isVisible = true;
    let isTabActive = true;
    let animationFrameId: number;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080c14, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // limit pixel ratio for battery efficiency
    container.appendChild(renderer.domElement);

    // 2. Core 3D Geometry: Multi-layer Agentic Neural Sphere
    // Inner Sphere (Wireframe Core)
    const innerGeo = new THREE.IcosahedronGeometry(4, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Outer Geodesic Shell
    const outerGeo = new THREE.IcosahedronGeometry(5.2, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      roughness: 0.4,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerMesh);

    // Dynamic Orbital Ring
    const ringGeo = new THREE.TorusGeometry(6.5, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xa78bfa,
      transparent: true,
      opacity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // Secondary Slanted Ring
    const ring2Geo = new THREE.TorusGeometry(7.2, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring2);

    // 3. Floating Agentic Nodes (Particle Cloud)
    const nodeCount = 70;
    const nodeGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(nodeCount * 3);
    const colors = new Float32Array(nodeCount * 3);

    const colorViolet = new THREE.Color(0xa78bfa);
    const colorCyan = new THREE.Color(0x38bdf8);
    const colorEmerald = new THREE.Color(0x34d399);

    for (let i = 0; i < nodeCount; i++) {
      const radius = 4.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = i % 3 === 0 ? colorViolet : i % 3 === 1 ? colorCyan : colorEmerald;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    nodeGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    nodeGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const nodes = new THREE.Points(nodeGeo, nodeMat);
    scene.add(nodes);

    // 4. Soft Ambient & Interactive Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const mouseLight = new THREE.PointLight(0xa78bfa, 2.5, 25);
    mouseLight.position.set(0, 0, 10);
    scene.add(mouseLight);

    const cyanRimLight = new THREE.PointLight(0x38bdf8, 2, 20);
    cyanRimLight.position.set(-8, 6, -4);
    scene.add(cyanRimLight);

    // 5. Mouse Interaction with Lerping
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 1.5;
      targetY = y * 1.5;
      mouseLight.position.x = x * 10;
      mouseLight.position.y = y * 10;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });

    // 6. Zero-Waste Render Loop & Observers
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && isTabActive) {
        startLoop();
      } else {
        stopLoop();
      }
    }, { threshold: 0.1 });

    observer.observe(container);

    const onVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isVisible && isTabActive) {
        startLoop();
      } else {
        stopLoop();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible || !isTabActive) return;

      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse responsiveness
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Rotations
      innerMesh.rotation.y = elapsedTime * 0.15 + currentX;
      innerMesh.rotation.x = elapsedTime * 0.08 + currentY;

      outerMesh.rotation.y = -elapsedTime * 0.1 + currentX * 0.5;
      outerMesh.rotation.x = -elapsedTime * 0.06 + currentY * 0.5;

      ring.rotation.z = elapsedTime * 0.2;
      ring.rotation.y = elapsedTime * 0.05;

      ring2.rotation.z = -elapsedTime * 0.18;

      nodes.rotation.y = elapsedTime * 0.07;
      nodes.rotation.x = elapsedTime * 0.04;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    function startLoop() {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    function stopLoop() {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    }

    startLoop();

    // 7. Responsive Resizing
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // 8. Proper Lifecycle Cleanup
    return () => {
      stopLoop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!isSupported) {
    // Graceful CSS Fallback
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-72 h-72 rounded-full border border-soft-violet/30 animate-pulse-subtle bg-gradient-to-tr from-soft-violet/10 via-soft-cyan/10 to-transparent flex items-center justify-center shadow-soft-glow-violet">
          <div className="w-48 h-48 rounded-full border border-soft-cyan/40 animate-spin" style={{ animationDuration: "12s" }} />
          <div className="absolute w-24 h-24 rounded-full bg-soft-violet/20 blur-xl" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[460px] lg:min-h-[560px] relative pointer-events-auto cursor-grab active:cursor-grabbing"
      aria-label="3D Interactive Agentic Constellation"
    />
  );
}
