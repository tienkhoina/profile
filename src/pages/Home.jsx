import Navbar from "../components/layout/Navbar";
import HeroBlock from "../components/hero/HeroBlock";

import ResearchSection from "../components/sections/ResearchSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

import MainScene from "../scenes/MainScene";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* 3D BACKGROUND */}
      <div style={sceneLayer} className="pointer-events-none">
        <MainScene />
      </div>

      {/* UI */}
      <div style={mainStyle}>

        <Navbar />

        {/* Spacer navbar */}
        <div style={{ height: 80 }} />

        <main>

          <section id="home" style={heroSection}>
            <div className="px-4 md:px-0">
              <HeroBlock />
            </div>
          </section>

          <section id="research">
            <div className="px-4 md:px-0">
              <ResearchSection />
            </div>
          </section>

          <section id="projects">
            <div className="px-4 md:px-0">
              <ProjectsSection />
            </div>
          </section>

          <section id="contact">
            <div className="px-4 md:px-0">
              <ContactSection />
            </div>
          </section>

        </main>

      </div>
    </div>
  );
}

/* ================= STYLE GIỮ NGUYÊN ================= */

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
