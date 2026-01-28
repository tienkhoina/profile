import { useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function StarField() {
  const ref = useRef();

  const positions = new Float32Array(3000 * 3);
  for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
  }

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
