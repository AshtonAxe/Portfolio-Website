import { Card } from "@/components/ui/card";
import { Microscope, Building2, FileText, DollarSign, Trophy } from "lucide-react";

export const QuickStats = () => {
  const stats = [
    {
      icon: Microscope,
      label: "Research Labs",
      value: "4+",
      description: "MIT CSAIL, Broad Institute, UCPH",
    },
    {
      icon: Building2,
      label: "Startup Founded",
      value: "Ant AI",
      description: "AI behavioral prediction platform",
    },
    {
      icon: DollarSign,
      label: "Funding Raised",
      value: "$500K",
      description: "Pre-seed round",
    },
    {
      icon: Trophy,
      label: "Athletics",
      value: "Captain",
      description: "USA U18 Box Lacrosse Team",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Quick Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
