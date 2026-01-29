import { researchAreas } from "../../data/research";
import { useState, useEffect } from "react";

export default function ResearchSection() {
  const [activeIndex, setActiveIndex] = useState(-1);
    const [isVisible, setIsVisible] = useState(false);
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    }, []);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={wrap}>
      
      {/* Animated Header */}
      <div style={headerWrapper}>
        <div style={titleContainer}>
          <h2 style={title(isVisible, isMobile)}>


            <span style={titleIcon}>🔬</span> Research Areas
          </h2>
          <p style={subtitle(isMobile)}>
            Interdisciplinary investigations & theoretical frameworks
          </p>
        </div>
        
        {/* Animated Dots Pattern */}
        <div style={dotsPattern}></div>
      </div>

      {/* Research Cards Grid */}
      <div style={grid(isMobile)}>

        {researchAreas.map((item, i) => (
          <ResearchCard
            key={i}
            index={i}
            title={item.title}
            description={item.description}
            keywords={item.keywords}
            reportLink={item.reportLink}
            codeLink={item.codeLink}
            publications={item.publications || 0}
            active={activeIndex === i}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(-1)}
            delay={i * 100}
            isVisible={isVisible}
            isMobile={isMobile}
            />


        ))}
      </div>

      {/* Background Decorative Elements */}
      <div style={scienceOrbs}>
        <div style={scienceOrb1}></div>
        <div style={scienceOrb2}></div>
        <div style={scienceOrb3}></div>
      </div>

      {/* Connector Lines for Interactive Mode */}
      <svg style={connectorLines} width="100%" height="100%">
        {activeIndex !== -1 && (
          <path
            d={`M ${(activeIndex % 3) * 340 + 170} ${Math.floor(activeIndex / 3) * 380 + 190} 
                L 500 600`}
            stroke="rgba(88, 101, 242, 0.3)"
            strokeWidth="1"
            strokeDasharray="5,5"
            fill="none"
          />
        )}
      </svg>

    </div>
  );
}

function ResearchCard({
  title,
  description,
  keywords,
  reportLink,
  codeLink,
  publications = 0,
  index,
  active,
  onMouseEnter,
  onMouseLeave,
  delay,
  isVisible,
  isMobile
}) 
 {
  return (
    <div 
      style={card(active, isVisible, delay)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-index={index}
    >
      {/* Card Number and Icon */}
      <div style={cardHeader}>
        <div style={cardNumberWrapper}>
          <span style={cardNumber}>0{index + 1}</span>
          <div style={cardIcon(active)}>⚗</div>
        </div>
        
        {/* Publications Count */}
        <div style={publicationsBadge}>
          <span style={pubIcon}>📄</span>
          <span style={pubCount}>{publications}</span>
        </div>
      </div>

      {/* Card Content */}
      <div style={cardContent}>
        <h3 style={cardTitle(active, isMobile)}>
          {title}
          {active && <span style={sparkle}>✨</span>}
        </h3>
        
        <p style={desc(isMobile)}>{description}</p>


        {/* Keywords with Interactive Effects */}
        <div style={tags}>
          {keywords.map((k, i) => (
            <span key={i} style={tag(active, i)}>
              {k}
              {active && <span style={tagGlow}></span>}
            </span>
          ))}
        </div>

        {/* Progress Bar (for ongoing research) */}
        <div style={progressContainer}>
          <div style={progressBar}>
            <div style={progressFill(Math.random() * 100)}></div>
          </div>
          <span style={progressLabel}>
            {Math.random() > 0.5 ? "Ongoing Research" : "Active Investigation"}
          </span>
        </div>

        {/* Hover Actions */}
        <div style={actions(active, isMobile)}>
          <a
            href={reportLink}
            target="_blank"
            rel="noopener noreferrer"
            style={readMoreBtn}
            >
            Read Report
            <span style={arrowIcon}>→</span>
            </a>

          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={exploreBtn}
            >
            Explore
            <span style={exploreIcon}>🡢</span>
            </a>

        </div>
      </div>

      {/* Card Effects */}
      <div style={cardEffects(active)}>
        <div style={particleField}></div>
        <div style={gradientBorder(active)}></div>
        <div style={innerGlow(active)}></div>
      </div>
    </div>
  );
}

/* ================= STYLE ================= */

const wrap = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "100px 20px",
  position: "relative",
  overflow: "hidden"
};

const headerWrapper = {
  marginBottom: 80,
  position: "relative",
  zIndex: 2
};

const titleContainer = {
  marginBottom: 24,
  position: "relative"
};

const title = (isVisible, isMobile) => ({
  fontSize: isMobile ? 32 : 56,

  fontWeight: 800,
  margin: 0,
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  gap: 20,
  textShadow: "0 0 30px rgba(120, 130, 255, 0.4)",
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateY(0)" : "translateY(20px)",
  transition: "all 0.8s ease-out"
});

const titleIcon = {
  fontSize: 40,
  background: "linear-gradient(135deg, #5865f2, #7984ff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "bounce 3s infinite"
};

const subtitle = (isMobile) => ({
  fontSize: isMobile ? 14 : 18,
  color: "#b5b8ff",
  marginTop: 12,
  fontWeight: 300,
  letterSpacing: 0.5,
  maxWidth: 600,
  lineHeight: 1.6
});


const dotsPattern = {
  position: "absolute",
  top: -30,
  right: 0,
  width: 300,
  height: 200,
  backgroundImage: `
    radial-gradient(circle at 2px 2px, rgba(88, 101, 242, 0.15) 2px, transparent 0)
  `,
  backgroundSize: "20px 20px",
  opacity: 0.5,
  zIndex: -1
};

const grid = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile
    ? "1fr"
    : "repeat(auto-fit, minmax(350px, 1fr))",

  gap: 40,
  position: "relative",
  zIndex: 2
});

const card = (active, isVisible, delay) => ({
  padding: 0,
  borderRadius: 24,
  background: active 
    ? "rgba(255, 255, 255, 0.07)" 
    : "rgba(255, 255, 255, 0.04)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(12px)",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",

  cursor: "pointer",
  opacity: isVisible ? 1 : 0,
  transform:
  active
    ? "translateY(-10px) scale(1.02)"
    : isVisible
      ? "translateY(0) scale(1)"
      : "translateY(40px) scale(1)",

  transitionDelay: `${delay}ms`,
  zIndex: active ? 10 : 1,
  boxShadow: active 
    ? "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(88, 101, 242, 0.2)"
    : "0 8px 32px rgba(0, 0, 0, 0.2)"
});

const cardHeader = {
  padding: "28px 28px 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
};

const cardNumberWrapper = {
  display: "flex",
  alignItems: "center",
  gap: 12
};

const cardNumber = {
  fontSize: 14,
  color: "rgba(255, 255, 255, 0.4)",
  fontWeight: 600,
  fontFamily: "'SF Mono', monospace"
};

const cardIcon = (active) => ({
  fontSize: 24,
  color: active ? "#7984ff" : "rgba(255, 255, 255, 0.3)",
  transition: "all 0.3s ease",
  transform: active ? "scale(1.2)" : "scale(1)"
});

const publicationsBadge = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "6px 12px",
  borderRadius: 20,
  background: "rgba(88, 101, 242, 0.1)",
  border: "1px solid rgba(88, 101, 242, 0.2)"
};

const pubIcon = {
  fontSize: 12
};

const pubCount = {
  fontSize: 12,
  color: "#7984ff",
  fontWeight: 600
};

const cardContent = {
  padding: "20px 28px 28px"
};

const cardTitle = (active, isMobile) => ({
  fontSize: isMobile ? 18 : 24,

  fontWeight: 700,
  marginBottom: 16,
  color: active ? "#ffffff" : "#e0e2ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "all 0.3s ease"
});

const sparkle = {
  fontSize: 18,
  animation: "sparkle 1.5s infinite"
};

const desc = (isMobile) => ({
  fontSize: isMobile ? 13 : 15,
  lineHeight: 1.8,
  color: "#c6c9ff",
  marginBottom: 24,
  fontWeight: 300,
  minHeight: 72
});


const tags = {
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
  marginBottom: 28
};

const tag = (active, index) => ({
  fontSize: 12,
  padding: "8px 16px",
  borderRadius: 20,
  background: active 
    ? "rgba(120, 130, 255, 0.25)" 
    : "rgba(120, 130, 255, 0.15)",
  color: active ? "#ffffff" : "#b5b8ff",
  border: active 
    ? "1px solid rgba(120, 130, 255, 0.4)" 
    : "1px solid rgba(120, 130, 255, 0.2)",
  transition: `all 0.3s ease ${index * 0.05}s`,
  transform: active ? "translateY(-2px)" : "translateY(0)",
  fontWeight: 500,
  letterSpacing: 0.3,
  position: "relative",
  overflow: "hidden"
});

const tagGlow = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
  animation: "pulse 2s infinite"
};

const progressContainer = {
  marginBottom: 28
};

const progressBar = {
  height: 4,
  background: "rgba(255, 255, 255, 0.05)",
  borderRadius: 2,
  overflow: "hidden",
  marginBottom: 8
};

const progressFill = (percentage) => ({
  height: "100%",
  width: `${percentage}%`,
  background: "linear-gradient(90deg, #5865f2, #7984ff)",
  borderRadius: 2,
  transition: "width 1s ease-out"
});

const progressLabel = {
  fontSize: 11,
  color: "rgba(255, 255, 255, 0.5)",
  textTransform: "uppercase",
  letterSpacing: 1
};

const actions = (active, isMobile) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  gap: 12,
  opacity: active ? 1 : 0,
  transform: active ? "translateY(0)" : "translateY(10px)",
  transition: "all 0.3s ease"
});


const buttonBase = {
  flex: 1,
  padding: "12px 20px",
  borderRadius: 12,
  border: "none",
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  transition: "all 0.3s ease"
};

const readMoreBtn = {
  ...buttonBase,
  background: "rgba(88, 101, 242, 0.2)",
  color: "#e0e2ff",
  border: "1px solid rgba(88, 101, 242, 0.3)",
  ":hover": {
    background: "rgba(88, 101, 242, 0.3)",
    transform: "translateY(-2px)"
  }
};

const exploreBtn = {
  ...buttonBase,
  background: "rgba(255, 255, 255, 0.05)",
  color: "#ffffff",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  ":hover": {
    background: "rgba(255, 255, 255, 0.1)",
    transform: "translateY(-2px)"
  }
};

const arrowIcon = {
  fontSize: 16,
  transition: "transform 0.3s ease"
};

const exploreIcon = {
  fontSize: 14
};

const cardEffects = (active) => ({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  zIndex: -1
});

const particleField = {
  position: "absolute",
  inset: 0,
  backgroundImage: `
    radial-gradient(circle at 20% 30%, rgba(88, 101, 242, 0.05) 2px, transparent 0),
    radial-gradient(circle at 80% 70%, rgba(120, 130, 255, 0.03) 1px, transparent 0)
  `,
  backgroundSize: "50px 50px"
};

const gradientBorder = (active) => ({
  position: "absolute",
  inset: 0,
  borderRadius: 24,
  padding: "2px",
  background: active 
    ? "linear-gradient(135deg, rgba(88, 101, 242, 0.5), rgba(120, 130, 255, 0.3), rgba(88, 101, 242, 0.5))"
    : "transparent",
  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
  transition: "all 0.5s ease"
});

const innerGlow = (active) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "100%",
  background: active 
    ? "radial-gradient(circle at 50% 0%, rgba(88, 101, 242, 0.15), transparent 70%)"
    : "none",
  transition: "all 0.5s ease"
});

const scienceOrbs = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  zIndex: 1
};

const scienceOrb1 = {
  position: "absolute",
  width: 400,
  height: 400,
  background: "radial-gradient(circle, rgba(88, 101, 242, 0.1) 0%, transparent 70%)",
  filter: "blur(60px)",
  top: "-100px",
  left: "-100px",
  animation: "float 15s ease-in-out infinite"
};

const scienceOrb2 = {
  position: "absolute",
  width: 300,
  height: 300,
  background: "radial-gradient(circle, rgba(120, 130, 255, 0.08) 0%, transparent 70%)",
  filter: "blur(50px)",
  bottom: "-50px",
  right: "-50px",
  animation: "float 12s ease-in-out infinite reverse"
};

const scienceOrb3 = {
  position: "absolute",
  width: 200,
  height: 200,
  background: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
  filter: "blur(40px)",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: "pulse 8s ease-in-out infinite"
};

const connectorLines = {
  position: "absolute",
  top: 0,
  left: 0,
  pointerEvents: "none",
  zIndex: 1
};

// Thêm các animation vào global styles
const researchAnimations = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes sparkle {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0);
    }
    33% {
      transform: translate(30px, -30px);
    }
    66% {
      transform: translate(-20px, 20px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;