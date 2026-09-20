import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CosmicBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 120;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 1. Particle Starfield
    const starsCount = 2000;
    const starPositions = new Float32Array(starsCount * 3);
    const starColors = new Float32Array(starsCount * 3);

    const colorCrimson = new THREE.Color('#e02444');
    const colorWhite = new THREE.Color('#ffffff');
    const colorBlue = new THREE.Color('#38bdf8');
    const colorAmber = new THREE.Color('#fbbf24');

    for (let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 500;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 500;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 400;

      // Color distribution: mostly white/blue stars, 15% crimson, 10% amber
      const rand = Math.random();
      let c = colorWhite;
      if (rand < 0.15) c = colorCrimson;
      else if (rand < 0.35) c = colorBlue;
      else if (rand < 0.45) c = colorAmber;

      starColors[i3] = c.r;
      starColors[i3 + 1] = c.g;
      starColors[i3 + 2] = c.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 2. Cosmic Singularity / Accretion Ring (Blackhole disk)
    const ringCount = 1200;
    const ringPositions = new Float32Array(ringCount * 3);
    const ringColors = new Float32Array(ringCount * 3);

    for (let i = 0; i < ringCount; i++) {
      const i3 = i * 3;
      const radius = 25 + Math.random() * 45;
      const angle = Math.random() * Math.PI * 2;
      const thickness = (Math.random() - 0.5) * 4;

      ringPositions[i3] = Math.cos(angle) * radius;
      ringPositions[i3 + 1] = Math.sin(angle) * (radius * 0.32) + thickness;
      ringPositions[i3 + 2] = (Math.sin(angle) * radius * 0.65) - 30;

      // Outer rings crimson, inner ring white-hot
      const mixRatio = Math.min(1, Math.max(0, (radius - 25) / 45));
      const ringColor = new THREE.Color().lerpColors(new THREE.Color('#ffffff'), new THREE.Color('#e02444'), mixRatio);
      
      ringColors[i3] = ringColor.r;
      ringColors[i3 + 1] = ringColor.g;
      ringColors[i3 + 2] = ringColor.b;
    }

    const ringGeo = new THREE.BufferGeometry();
    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
    ringGeo.setAttribute('color', new THREE.BufferAttribute(ringColors, 3));

    const ringMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const accretionDisk = new THREE.Points(ringGeo, ringMat);
    accretionDisk.rotation.x = 0.4;
    accretionDisk.position.set(0, 10, -20);
    scene.add(accretionDisk);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Slow majestic rotations
      starField.rotation.y = elapsedTime * 0.02 + mouseX * 0.15;
      starField.rotation.x = elapsedTime * 0.01 + mouseY * 0.1;

      accretionDisk.rotation.z = elapsedTime * 0.08;
      accretionDisk.rotation.y = Math.sin(elapsedTime * 0.2) * 0.15 + mouseX * 0.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      starGeo.dispose();
      starMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
}
