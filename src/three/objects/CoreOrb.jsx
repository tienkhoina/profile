import { useRef } from "react";
import { MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function CoreOrb() {
  const ref = useRef();

  useFrame(({ mouse }) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.003;
    ref.current.rotation.x += 0.002;

    ref.current.position.x = mouse.x * 0.8;
    ref.current.position.y = mouse.y * 0.6;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <MeshDistortMaterial
        color="#5b6cff"
        distort={0.4}
        speed={2}
        roughness={0}
      />
    </mesh>
  );
}
