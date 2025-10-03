import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { QuickStats } from "@/components/QuickStats";
import { FeaturedResearch } from "@/components/FeaturedResearch";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <QuickStats />
        <FeaturedResearch />
      </main>
    </div>
  );
};

export default Index;
