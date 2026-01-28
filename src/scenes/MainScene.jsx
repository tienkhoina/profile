import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";
import { useState, useEffect } from "react";

import SceneLights from "../three/lights/SceneLights";
import CoreOrb from "../three/objects/CoreOrb";
import FloatingHeadline from "../three/objects/FloatingHeadline";

export default function MainScene() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: isMobile ? [0,0,6] : [0,0,8], fov: 55 }}
      eventSource={isMobile ? undefined : document.body}
      className="w-full h-full pointer-events-none"
    >
      <color attach="background" args={["#050509"]} />

      <SceneLights />
      <Environment preset="city" />

      <Stars
        radius={120}
        depth={60}
        count={isMobile ? 2000 : 5000}
        factor={4}
        fade
      />

      <FloatingHeadline />
      <CoreOrb />

      {!isMobile && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate
        />
      )}

    </Canvas>
  );
}
