import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";

import SceneLights from "../three/lights/SceneLights";
import CoreOrb from "../three/objects/CoreOrb";
import FloatingHeadline from "../three/objects/FloatingHeadline";

export default function MainScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      eventSource={document.body}
      eventPrefix="client"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0
      }}
    >
      <color attach="background" args={["#050509"]} />

      <SceneLights />
      <Environment preset="city" />
      <Stars radius={120} depth={60} count={5000} factor={4} fade />

      <FloatingHeadline />
      <CoreOrb />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
      />
    </Canvas>
  );
}
