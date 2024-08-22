import { Footer, Navbar } from "@/components";
import {
  AboutSection,
  BlogSection,
  ContactSection,
  FeatureSection,
  HeroSection,
  VolunteerSection,
} from "./Sections";

const LandingPage = () => {
  return (
    <div className="content-grid">
      <Navbar />

      <div className="full-width content-grid min-h-dvh">
        <HeroSection />
        <FeatureSection />
        <AboutSection />
        <VolunteerSection />
        <BlogSection />
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};
export default LandingPage;
