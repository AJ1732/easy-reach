import {
  HeroSection,
  FeatureSection,
  VolunteerSection,
  ContactSection,
} from "./sections";

const HomePage = () => {
  return (
    <div className="full-width content-grid min-h-dvh">
      <HeroSection />
      <FeatureSection />
      <VolunteerSection />
      <ContactSection />
    </div>
  );
};
export default HomePage;
