import { Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="content-grid">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};
export default LandingPage;
