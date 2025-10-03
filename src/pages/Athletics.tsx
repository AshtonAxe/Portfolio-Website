import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Target } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Athletics = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Athletics</h1>
            <p className="text-xl text-muted-foreground">
              Competitive athletics and team leadership experience
            </p>
          </div>

          {/* Current Team */}
          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold">MIT Varsity Lacrosse</h2>
                  <Badge>Current</Badge>
                </div>
                <p className="text-muted-foreground mb-2">
                  <span className="font-semibold">Position:</span> Starter
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently playing as a starter on the MIT varsity lacrosse team, 
                  competing at the NCAA Division III level. Balancing rigorous 
                  academic coursework in computer science and molecular biology 
                  with athletic commitment and team responsibilities.
                </p>
              </div>
            </div>
          </Card>

          {/* National Team Experience */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">National Team Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      USA Box Lacrosse U18 Team Captain
                    </h3>
                    <p className="text-sm text-muted-foreground">2022</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Selected as captain of the USA U18 box lacrosse team, leading 
                  the squad in international competition and demonstrating 
                  leadership both on and off the field.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      USA Box Lacrosse U18 Team Member
                    </h3>
                    <p className="text-sm text-muted-foreground">2021</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Competed as a member of the USA U18 box lacrosse national team, 
                  representing the United States in international box lacrosse 
                  tournaments.
                </p>
              </Card>
            </div>
          </div>

          {/* High School Athletics */}
          <div>
            <h2 className="text-2xl font-bold mb-6">High School Athletics</h2>
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Choate Rosemary Hall
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Multi-sport varsity athlete competing at the prep school level
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <h4 className="font-semibold">Varsity Lacrosse</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Position:</span> Starter
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Seasons:</span> 2022, 2023
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <h4 className="font-semibold">Varsity Basketball</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Position:</span> Starter
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Seasons:</span> 2022, 2023
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Athletics;
