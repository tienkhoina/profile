export default function FooterStats() {
  return (
    <div style={bar}>
      <Item value="Deep Learning" label="Domain" />
      <Item value="Optimization" label="Focus" />
      <Item value="C++ / Python" label="Stack" />
    </div>
  );
}

function Item({ value, label }) {
  return (
    <div style={item}>
      <span>{value}</span>
      <small style={{ opacity: 0.6 }}>{label}</small>
    </div>
  );
}

const bar = {
  position: "absolute",
  bottom: 40,
  left: "8vw",
  display: "flex",
  gap: 80,
  color: "white"
};

const item = {
  display: "flex",
  flexDirection: "column",
  gap: 6
};
