import {
  HeroSection,
  FeatureSection,
  AboutSection,
  VolunteerSection,
  BlogSection,
  ContactSection,
} from "./sections";

const HomePage = () => {
  return (
    <div className="full-width content-grid min-h-dvh">
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <VolunteerSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
};
export default HomePage;
