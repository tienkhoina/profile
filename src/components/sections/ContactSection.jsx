import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section style={wrap} id="contact">

      {/* Header */}
      <div style={header}>
        <h2 style={title}>Contact</h2>
        <p style={subtitle}>
          Let's connect and build something meaningful.
        </p>
      </div>

      {/* Cards */}
      <div style={grid}>

        {/* Email */}
        <motion.a
          href="mailto:tienkhoina@gmail.com"
          style={card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{
            y: -6,
            scale: 1.03,
            boxShadow: "0 20px 40px rgba(140,120,255,0.35)",
            background: "rgba(255,255,255,0.08)"
          }}
          whileTap={{ scale: 0.97 }}
        >
          <MailIcon size={26} />
          <div>
            <div style={label}>Email</div>
            <div style={value}>tienkhoina@gmail.com</div>
          </div>
        </motion.a>

        {/* Github */}
        {profile.socials.github && (
          <motion.a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            style={card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              y: -6,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(140,120,255,0.35)",
              background: "rgba(255,255,255,0.08)"
            }}
            whileTap={{ scale: 0.97 }}
          >
            <GithubIcon size={26} />
            <div>
              <div style={label}>GitHub</div>
              <div style={value}>github.com</div>
            </div>
          </motion.a>
        )}

        {/* LinkedIn */}
        {profile.socials.linkedin && (
          <motion.a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            style={card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              y: -6,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(140,120,255,0.35)",
              background: "rgba(255,255,255,0.08)"
            }}
            whileTap={{ scale: 0.97 }}
          >
            <LinkedinIcon size={26} />
            <div>
              <div style={label}>LinkedIn</div>
              <div style={value}>linkedin.com</div>
            </div>
          </motion.a>
        )}

      </div>

    </section>
  );
}

/* ================= STYLES ================= */

const wrap = {
  minHeight: "80vh",
  padding: "120px 8vw",
  color: "white"
};

const header = {
  marginBottom: 80
};

const title = {
  fontSize: 56,
  fontWeight: 700,
  margin: 0,
  background: "linear-gradient(135deg,#9aa2ff,#c084fc)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const subtitle = {
  marginTop: 12,
  color: "#b6bbff",
  fontSize: 18
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: 28,
  maxWidth: 900
};

const card = {
  display: "flex",
  alignItems: "center",
  gap: 18,
  padding: "28px 30px",
  borderRadius: 18,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(8px)",
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
  willChange: "transform"
};

const label = {
  fontSize: 14,
  color: "#9aa2ff",
  marginBottom: 4
};

const value = {
  fontSize: 16,
  fontWeight: 500
};
