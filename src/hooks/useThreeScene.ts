import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface ThreeSceneOptions {
  container: HTMLDivElement | null;
}

export function useThreeScene({ container }: ThreeSceneOptions) {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambient = new THREE.AmbientLight(0xf8f8f2, 0.55);
    scene.add(ambient);
    const pointGold = new THREE.PointLight(0xff79c6, 2.2, 20);
    pointGold.position.set(4, 3, 4);
    scene.add(pointGold);
    const pointPink = new THREE.PointLight(0x8be9fd, 1.6, 20);
    pointPink.position.set(-4, -2, 3);
    scene.add(pointPink);

    // Flower builder
    const flowerGroup = new THREE.Group();

    // Center sphere
    const centerGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0xbd93f9,
      metalness: 0.6,
      roughness: 0.3,
    });
    flowerGroup.add(new THREE.Mesh(centerGeo, centerMat));

    // Petals
    const petalMat = new THREE.MeshStandardMaterial({
      color: 0xff79c6,
      metalness: 0.2,
      roughness: 0.5,
      transparent: true,
      opacity: 0.92,
    });
    const petalCount = 6;
    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * Math.PI * 2;
      const petalGeo = new THREE.SphereGeometry(0.28, 12, 12);
      const petal = new THREE.Mesh(petalGeo, petalMat);
      petal.position.set(Math.cos(angle) * 0.72, Math.sin(angle) * 0.72, 0);
      petal.scale.set(1, 0.65, 0.5);
      flowerGroup.add(petal);
    }

    // Outer petals (rose gold)
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x8be9fd,
      metalness: 0.3,
      roughness: 0.4,
      transparent: true,
      opacity: 0.75,
    });
    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * Math.PI * 2 + Math.PI / petalCount;
      const geo = new THREE.SphereGeometry(0.22, 10, 10);
      const petal = new THREE.Mesh(geo, outerMat);
      petal.position.set(Math.cos(angle) * 1.1, Math.sin(angle) * 1.1, -0.1);
      petal.scale.set(1.1, 0.55, 0.4);
      flowerGroup.add(petal);
    }

    scene.add(flowerGroup);

    // Particle system
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const goldColor = new THREE.Color(0xf1fa8c);
    const blushColor = new THREE.Color(0x8be9fd);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      const c = Math.random() > 0.5 ? goldColor : blushColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // GSAP auto-rotate
    gsap.to(flowerGroup.rotation, {
      y: Math.PI * 2,
      duration: 8,
      repeat: -1,
      ease: "none",
    });
    gsap.to(flowerGroup.rotation, {
      x: Math.PI * 2,
      duration: 14,
      repeat: -1,
      ease: "none",
    });

    let animFrame: number;
    const animate = () => {
      animFrame = requestAnimationFrame(animate);
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0003;
      renderer.render(scene, camera);
    };
    animate();
    frameRef.current = animFrame!;

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrame);
      gsap.killTweensOf(flowerGroup.rotation);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [container]);
}
