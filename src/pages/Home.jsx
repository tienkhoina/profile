import Navbar from "../components/layout/Navbar";
import HeroBlock from "../components/hero/HeroBlock";

import ResearchSection from "../components/sections/ResearchSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

import MainScene from "../scenes/MainScene";

export default function Home() {
  return (
    <>
      {/* 3D BACKGROUND */}
      <div style={sceneLayer}>
        <MainScene />
      </div>

      {/* UI */}
      <Navbar />

      {/* Spacer navbar */}
      <div style={{ height: 80 }} />

      <main style={mainStyle}>

        <section id="home" style={heroSection}>
          <HeroBlock />
        </section>

        <section id="research">
          <ResearchSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

      </main>
    </>
  );
}

/* ================= STYLE ================= */

const sceneLayer = {
  position: "fixed",
  inset: 0,
  zIndex: 0
};


const mainStyle = {
  position: "relative",
  zIndex: 1
};

const heroSection = {
  minHeight: "100vh"
};
