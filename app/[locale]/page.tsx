import HeroSection from "./_home/HeroSection";
import FeaturesSection from "./_home/FeaturesSection";
import ProgramsSection from "./_home/ProgramsSection";
import ImpactSection from "./_home/ImpactSection";
import TestimonialsSection from "./_home/TestimonialsSection";
import InsightsSection from "./_home/InsightsSection";

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <FeaturesSection />
      <ProgramsSection />
      <ImpactSection />
      <TestimonialsSection />
      <InsightsSection />
    </main>
  );
}
