export default function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[-5, -5, -5]} intensity={1} />
    </>
  );
}
