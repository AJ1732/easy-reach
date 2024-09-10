import {
  AboutSection,
  HeroSection,
  MissionVisionSection,
  OurTeamSection,
} from "./sections";

const AboutPage = () => {
  return (
    <div className="full-width content-grid min-h-dvh">
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <OurTeamSection />
    </div>
  );
};
export default AboutPage;
