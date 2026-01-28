import { useState, useEffect } from "react";
import { profile } from "../../data/profile";

export default function HeroBlock() {

  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);
  const [letters, setLetters] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* Detect mobile */
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Split name */
  useEffect(() => {
    setLetters(profile.name.split(""));
  }, []);

  /* Mouse parallax (desktop only) */
  useEffect(() => {
    if (isMobile) return;

    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  /* Inject animations */
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = animations;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section style={wrapper(isMobile)} id="hero">

      {/* Glow */}
      <div style={glowLayer(mouse)}>
        <div style={orb1(isMobile)}></div>
        <div style={orb2(isMobile)}></div>
      </div>

      <div style={content(mouse, isMobile)}>

        <div style={eyebrow}>
          <span style={dot}></span>
          {profile.domain}
        </div>

        <h1 style={name(isMobile)}>
          {letters.map((l, i) => (
            <span key={i} style={letter(i, mouse)}>
              {l === " " ? "\u00A0" : l}
            </span>
          ))}
        </h1>

        <h2 style={role(isMobile)}>{profile.role}</h2>

        <p style={bio(isMobile)}>{profile.bio}</p>

        <div style={actions(isMobile)}>

          <a
            href="#research"
            style={primaryBtn(hoverPrimary)}
            onMouseEnter={() => setHoverPrimary(true)}
            onMouseLeave={() => setHoverPrimary(false)}
          >
            🔭 View Research
          </a>

          <a
            href="#contact"
            style={secondaryBtn(hoverSecondary)}
            onMouseEnter={() => setHoverSecondary(true)}
            onMouseLeave={() => setHoverSecondary(false)}
          >
            ✉ Get In Touch
          </a>

        </div>

      </div>

    </section>
  );
}

/* ================= LAYOUT ================= */

const wrapper = (isMobile) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  paddingLeft: isMobile ? "5vw" : "11vw",
  paddingRight: isMobile ? "5vw" : "0",
  overflow: "hidden",
  background: "transparent"
});

const content = (m, isMobile) => ({
  maxWidth: 620,
  position: "relative",
  zIndex: 2,
  pointerEvents: "auto",
  transform: isMobile
    ? "none"
    : `translate(${m.x * -10}px, ${m.y * -10}px)`,
  transition: "transform 0.12s ease-out"
});

/* ================= GLOW ================= */

const glowLayer = (m) => ({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
  transform: `translate(${m.x * 25}px, ${m.y * 25}px)`
});

const orb1 = (isMobile) => ({
  position: "absolute",
  width: isMobile ? 260 : 520,
  height: isMobile ? 260 : 520,
  background: "radial-gradient(circle, rgba(110,120,255,0.22), transparent 70%)",
  top: -160,
  left: -160,
  filter: "blur(90px)",
  animation: "float 14s ease-in-out infinite"
});

const orb2 = (isMobile) => ({
  position: "absolute",
  width: isMobile ? 220 : 420,
  height: isMobile ? 220 : 420,
  background: "radial-gradient(circle, rgba(160,100,255,0.18), transparent 70%)",
  bottom: -150,
  right: 120,
  filter: "blur(80px)",
  animation: "float 11s ease-in-out infinite reverse"
});

/* ================= TEXT ================= */

const eyebrow = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  fontSize: 12,
  letterSpacing: 3,
  color: "#aab0ff",
  marginBottom: 22,
  textTransform: "uppercase"
};

const dot = {
  width: 7,
  height: 7,
  borderRadius: "50%",
  background: "linear-gradient(135deg,#7aa2ff,#a855f7)",
  boxShadow: "0 0 12px rgba(140,150,255,0.9)"
};

const name = (isMobile) => ({
  fontSize: isMobile ? 42 : 92,
  fontWeight: 900,
  lineHeight: isMobile ? 1.1 : 0.95,
  margin: 0
});

const letter = (i, m) => ({
  display: "inline-block",
  background: `linear-gradient(135deg,
    hsl(${240 + i * 3},100%,74%),
    hsl(${285 + i * 3},100%,64%)
  )`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "0 0 40px rgba(130,140,255,0.45)",
  transform: `translate(${m.x * i * 0.35}px, ${m.y * i * 0.35}px)`,
  animation: `fadeUp 0.7s ease-out ${i * 0.05}s both`
});

const role = (isMobile) => ({
  marginTop: 18,
  fontSize: isMobile ? 18 : 26,
  color: "#dde0ff",
  fontWeight: 400
});

const bio = (isMobile) => ({
  marginTop: 26,
  fontSize: isMobile ? 14 : 17,
  maxWidth: isMobile ? "100%" : 520,
  lineHeight: 1.8,
  color: "#bfc5ff"
});

/* ================= BUTTON ================= */

const actions = (isMobile) => ({
  marginTop: 46,
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  gap: isMobile ? 14 : 24
});

const primaryBtn = (h) => ({
  padding: "16px 44px",
  borderRadius: 14,
  background: "linear-gradient(135deg,#5865f2,#8b5cf6)",
  color: "white",
  fontSize: 15,
  textDecoration: "none",
  transform: h ? "translateY(-3px) scale(1.06)" : "none",
  boxShadow: h
    ? "0 22px 50px rgba(120,130,255,0.6)"
    : "0 10px 28px rgba(120,130,255,0.35)",
  transition: "0.25s"
});

const secondaryBtn = (h) => ({
  padding: "16px 44px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.28)",
  background: h ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
  color: "white",
  fontSize: 15,
  textDecoration: "none",
  transform: h ? "translateY(-3px)" : "none",
  transition: "0.25s"
});

/* ================= ANIMATIONS ================= */

const animations = `
@keyframes fadeUp {
  from {opacity:0; transform:translateY(20px);}
  to {opacity:1; transform:translateY(0);}
}

@keyframes float {
  0%,100% {transform:translate(0,0);}
  50% {transform:translate(40px,-40px);}
}
`;
