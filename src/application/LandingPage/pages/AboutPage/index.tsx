import { AboutSection, HeroSection, MissionVisionSection } from "./sections";

const AboutPage = () => {
  return (
    <div className="full-width content-grid min-h-dvh">
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
    </div>
  );
};
export default AboutPage;
