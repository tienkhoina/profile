import { projects } from "../../data/projects";
import { useState, useEffect } from "react";

export default function ProjectsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Inject animations once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = globalStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={wrap}>

      {/* Header */}
      <div style={headerWrapper}>
        <div>
          <h2 style={title}>
            <span style={titleIcon}>✦</span> Featured Projects
          </h2>
          <p style={subtitle}>
            Research initiatives & experimental explorations
          </p>
        </div>

        <div style={headerLine}></div>
      </div>

      {/* Grid */}
      <div style={grid}>
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            index={i}
            {...p}
            projectLink={p.projectLink}
            isHovered={hoveredCard === i}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
            />

        ))}
      </div>

      <div style={gridGlow}></div>

    </div>
  );
}

/* ================= CARD ================= */

function ProjectCard({
  name,
  description,
  tech,
  projectLink,
  status = "ongoing",
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave
}) {
  return (
    <div
      style={card(isHovered)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={cardHeader}>
        <div style={cardStatus(status)}></div>
        <span style={cardNumber}>0{index + 1}</span>
      </div>

      <h3 style={cardTitle}>
        <span style={cardIcon}>⟢</span> {name}
      </h3>

      <p style={desc}>{description}</p>

      <div style={techList}>
        {tech.map((t, i) => (
          <span key={i} style={techTag(isHovered, i)}>
            {t}
          </span>
        ))}
      </div>

      <div style={cardGlow(isHovered)} />
      <div style={cardBorder(isHovered)} />

      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        style={viewButton(isHovered)}
      >
        Explore Project <span style={buttonArrow}>↗</span>
      </a>
    </div>
  );
}


/* ================= STYLES ================= */

const wrap = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "80px 20px",
  position: "relative"
};

const headerWrapper = {
  marginBottom: 64
};

const title = {
  fontSize: 52,
  margin: 0,
  display: "flex",
  alignItems: "center",
  gap: 16,
  color: "white"
};

const titleIcon = {
  color: "#7984ff",
  fontSize: 32,
  animation: "spin 10s linear infinite"
};

const subtitle = {
  fontSize: 18,
  color: "#b5b8ff",
  marginTop: 12
};

const headerLine = {
  height: 1,
  marginTop: 24,
  background: "linear-gradient(90deg,#5865f2,transparent)"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: 32,
  position: "relative",
  zIndex: 2
};

const gridGlow = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle, rgba(88,101,242,0.08), transparent 70%)",
  filter: "blur(80px)",
  zIndex: 1
};

/* ================= CARD STYLES ================= */

const card = (hover) => ({
  padding: 32,
  borderRadius: 20,
  background: hover
    ? "rgba(255,255,255,0.08)"
    : "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
  position: "relative",
  transition: "0.4s",
  transform: hover ? "translateY(-8px)" : "translateY(0)",
  cursor: "pointer"
});

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 24
};

const cardStatus = (status) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background:
    status === "completed" ? "#5865f2" : "#4ade80",
  boxShadow: "0 0 10px rgba(88,101,242,0.6)",
  animation: "pulse 2s infinite"
});

const cardNumber = {
  color: "rgba(255,255,255,0.4)",
  fontSize: 14
};

const cardTitle = {
  fontSize: 22,
  color: "white",
  marginBottom: 14,
  display: "flex",
  alignItems: "center",
  gap: 12
};

const cardIcon = {
  color: "#7984ff"
};

const desc = {
  fontSize: 15,
  color: "#c6c9ff",
  lineHeight: 1.7,
  minHeight: 70
};

const techList = {
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  marginTop: 20
};

const techTag = (hover, i) => ({
  padding: "6px 14px",
  borderRadius: 20,
  background: hover
    ? "rgba(120,130,255,0.25)"
    : "rgba(120,130,255,0.15)",
  color: "#e0e2ff",
  fontSize: 12,
  transition: `0.3s ease ${i * 0.05}s`,
  transform: hover ? "translateY(-2px)" : "translateY(0)"
});

const cardGlow = (hover) => ({
  position: "absolute",
  inset: 0,
  background: hover
    ? "radial-gradient(circle at top, rgba(88,101,242,0.18), transparent 70%)"
    : "none",
  pointerEvents: "none"
});

const cardBorder = (hover) => ({
  position: "absolute",
  inset: 0,
  borderRadius: 20,
  padding: "1px",
  background: hover
    ? "linear-gradient(135deg,#5865f2,#8b5cf6)"
    : "transparent",
  WebkitMask:
    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
  pointerEvents: "none"
});


const viewButton = (hover) => ({
  display: "block",
  marginTop: 26,
  padding: "12px 22px",
  borderRadius: 12,
  textAlign: "center",
  textDecoration: "none",
  color: "#e0e2ff",
  background: hover
    ? "rgba(88,101,242,0.25)"
    : "rgba(88,101,242,0.12)",
  border: "1px solid rgba(88,101,242,0.3)",
  transition: "0.3s"
});

const buttonArrow = {
  marginLeft: 6
};

/* ================= ANIMATIONS ================= */

const globalStyles = `
@keyframes pulse {
  0%,100%{opacity:1;}
  50%{opacity:.5;}
}

@keyframes spin {
  from{transform:rotate(0deg);}
  to{transform:rotate(360deg);}
}
`;
