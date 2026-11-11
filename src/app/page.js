import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import FeaturedProject from "./components/FeaturedProject";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Navbar />
      <div className="page-container mt-20 sm:mt-24">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <FeaturedProject />
        <ProjectsSection />
        <ServicesSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
