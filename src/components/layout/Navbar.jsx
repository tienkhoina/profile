import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div style={navWrapper}>
      <div style={navInner}>

        {/* Left */}
        <div style={logo}>TK</div>

        {/* Center */}
        <div style={links}>
          <a href="#home">Home</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right */}
        <div style={icons}>

          {profile.socials?.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              style={iconLink}
            >
              <GithubIcon size={22} />
            </a>
          )}

          {profile.socials?.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              style={iconLink}
            >
              <LinkedinIcon size={22} />
            </a>
          )}

          {profile.socials?.kaggle && (
            <a
              href={profile.socials.kaggle}
              target="_blank"
              rel="noreferrer"
              style={iconLink}
            >
              <img
                src="https://www.kaggle.com/static/images/site-logo.png"
                alt="kaggle"
                style={{ width: 22, height: 22 }}
              />
            </a>
          )}

        </div>

      </div>
    </div>
  );
}

/* ================= STYLE ================= */

const NAV_HEIGHT = 80;

const navWrapper = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: NAV_HEIGHT,
  background: "rgba(10,10,20,0.75)",
  backdropFilter: "blur(12px)",
  zIndex: 1000,
  display: "flex",
  justifyContent: "center",
  borderBottom: "1px solid rgba(255,255,255,0.06)"
};

const navInner = {
  width: "100%",
  maxWidth: 1200,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 32px",
  color: "white"
};

const logo = {
  fontWeight: 700,
  letterSpacing: 2
};

const links = {
  display: "flex",
  gap: 32
};

const icons = {
  display: "flex",
  gap: 18,
  alignItems: "center"
};

const iconLink = {
  color: "#cfd3ff",
  display: "flex",
  alignItems: "center",
  transition: "0.25s"
};
