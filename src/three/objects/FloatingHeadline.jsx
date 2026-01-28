import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";

export default function FloatingHeadline() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={1.5}>
      <Text
        ref={ref}
        fontSize={0.35}
        position={[0, 2.3, 0]}
        anchorX="center"
        anchorY="middle"
        color="#9aa5ff"
      >
        RESEARCH THROUGH ENGINEERING
      </Text>
    </Float>
  );
}