import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContactSection() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section style={wrap(isMobile)} id="contact">

      {/* Header */}
      <div style={header}>
        <h2 style={title(isMobile)}>Contact</h2>
        <p style={subtitle(isMobile)}>
          Let's connect and build something meaningful.
        </p>
      </div>

      {/* Cards */}
      <div style={grid(isMobile)}>

        {/* Email */}
        <ContactCard
          icon={<MailIcon size={24} />}
          label="Email"
          value="tienkhoina@gmail.com"
          link="mailto:tienkhoina@gmail.com"
          delay={0}
          isMobile={isMobile}
        />

        {/* Github */}
        {profile.socials.github && (
          <ContactCard
            icon={<GithubIcon size={24} />}
            label="GitHub"
            value="github.com"
            link={profile.socials.github}
            delay={0.1}
            isMobile={isMobile}
          />
        )}

        {/* LinkedIn */}
        {profile.socials.linkedin && (
          <ContactCard
            icon={<LinkedinIcon size={24} />}
            label="LinkedIn"
            value="linkedin.com"
            link={profile.socials.linkedin}
            delay={0.2}
            isMobile={isMobile}
          />
        )}

      </div>

    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function ContactCard({ icon, label, value, link, delay, isMobile }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={card(isMobile)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        !isMobile
          ? {
              y: -6,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(140,120,255,0.35)",
              background: "rgba(255,255,255,0.08)"
            }
          : {}
      }
      whileTap={{ scale: 0.97 }}
    >
      {icon}
      <div>
        <div style={labelStyle}>{label}</div>
        <div style={valueStyle(isMobile)}>{value}</div>
      </div>
    </motion.a>
  );
}

/* ================= STYLES ================= */

const wrap = (isMobile) => ({
  minHeight: "80vh",
  padding: isMobile ? "80px 14px" : "120px 8vw",
  color: "white"
});

const header = {
  marginBottom: 60
};

const title = (isMobile) => ({
  fontSize: isMobile ? 32 : 56,
  fontWeight: 700,
  margin: 0,
  background: "linear-gradient(135deg,#9aa2ff,#c084fc)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
});

const subtitle = (isMobile) => ({
  marginTop: 12,
  color: "#b6bbff",
  fontSize: isMobile ? 14 : 18
});

const grid = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile
    ? "1fr"
    : "repeat(auto-fit,minmax(260px,1fr))",
  gap: 24,
  maxWidth: 900
});

const card = (isMobile) => ({
  display: "flex",
  alignItems: "center",
  gap: 18,
  padding: isMobile ? "20px 18px" : "28px 30px",
  borderRadius: 18,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(8px)",
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
  width: isMobile ? "100%" : "auto"
});

const labelStyle = {
  fontSize: 13,
  color: "#9aa2ff",
  marginBottom: 4
};

const valueStyle = (isMobile) => ({
  fontSize: isMobile ? 14 : 16,
  fontWeight: 500
});
