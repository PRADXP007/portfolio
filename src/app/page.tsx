import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SoftwareProjectsSection from '@/components/sections/SoftwareProjectsSection';
import HardwareProjectsSection from '@/components/sections/HardwareProjectsSection';
import CurrentlyBuildingSection from '@/components/sections/CurrentlyBuildingSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F3ECE0] text-[#1E1B14] overflow-x-hidden selection:bg-[#5C1A28] selection:text-[#FAF6EE]">
      {/* Scroll Progress Indicator Bar */}
      <ScrollProgressBar />

      {/* Dynamic Sticky Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* Section Separator Line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <hr className="border-t border-[#5C1A28]/10" />
      </div>

      {/* 2. About Section */}
      <AboutSection />

      {/* Section Separator Line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <hr className="border-t border-[#5C1A28]/10" />
      </div>

      {/* 3. Skills Section */}
      <SkillsSection />

      {/* Section Separator Line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <hr className="border-t border-[#5C1A28]/10" />
      </div>

      {/* 4. Experience & Certifications Timeline */}
      <ExperienceSection />

      {/* Section Separator Line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <hr className="border-t border-[#5C1A28]/10" />
      </div>

      {/* 5. Software Projects Grid */}
      <SoftwareProjectsSection />

      {/* Section Separator Line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <hr className="border-t border-[#5C1A28]/10" />
      </div>

      {/* 6. Hardware Projects (Blueprint Schematic Grid) */}
      <HardwareProjectsSection />

      {/* Section Separator Line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <hr className="border-t border-[#5C1A28]/10" />
      </div>

      {/* 7. Currently Building (Flagship In Progress Panel) */}
      <CurrentlyBuildingSection />

      {/* Section Separator Line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <hr className="border-t border-[#5C1A28]/10" />
      </div>

      {/* 8. Contact & Reachout Section */}
      <ContactSection />

      {/* Editorial Footer */}
      <Footer />
    </main>
  );
}
