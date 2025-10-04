import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, GraduationCap, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const CommunityService = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Service</h1>
            <p className="text-xl text-muted-foreground">
              Leadership, service, and educational impact in the community
            </p>
          </div>

          <div className="space-y-8">
            {/* YMSL Leadership */}
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold">Young Men's Service League</h2>
                      <Badge>Leadership</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      <span className="font-semibold">Organization:</span> Young Men's Service League (YMSL)
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Dedicated leadership role in a service organization focused on developing young men
                      through community service, leadership opportunities, and character building. Led initiatives
                      that made meaningful impact in the local community while mentoring fellow members.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <h4 className="font-semibold">President</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Term:</span> 2023
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Led the organization's strategic direction, coordinated service projects,
                      and mentored younger members in leadership development.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <h4 className="font-semibold">Sergeant at Arms</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Term:</span> 2022
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Maintained order and discipline during meetings, assisted with
                      organizational logistics, and supported leadership initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Presidential Award */}
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold">Presidential Award Recipient</h2>
                      <Badge variant="secondary">Recognition</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-semibold">Year:</span> 2023
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Recognized for exceptional commitment to community service, completing
                      over 100 hours of volunteer work throughout the year. This prestigious
                      award acknowledges dedication to making a positive impact in the community
                      and serving as a role model for other young men in the organization.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border-2 border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="text-xl font-bold text-primary">100+ Hours</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Community service hours completed in 2023
                  </div>
                </div>
              </div>
            </Card>

            {/* Teaching Experience */}
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold">Elementary School Teacher</h2>
                      <Badge variant="secondary">Education</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-semibold">School:</span> Moses Y Beach Elementary School, Wallingford Public Schools
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Dedicated educator working with elementary school students to foster
                      learning, creativity, and academic growth. Developed engaging lesson plans,
                      provided individualized support to students, and contributed to creating
                      a positive and inclusive learning environment.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <h4 className="font-semibold">Student Engagement</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Created interactive and engaging learning experiences that
                      catered to diverse learning styles and abilities.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <h4 className="font-semibold">Academic Support</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Provided individualized attention and support to help students
                      achieve their academic goals and build confidence.
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

export default CommunityService;
