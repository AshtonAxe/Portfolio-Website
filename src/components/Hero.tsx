import { ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ashtonHeadshot from "@/assets/ashton-headshot.jpg";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Ashton Axe
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                AI Drug Discovery Researcher & Entrepreneur
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              MIT junior studying computer science and molecular biology,
              co-founder of Ant AI, and researcher in the Barzilay Lab working
              on protein-glycan interactions using Boltz models.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/research">
                  View Research
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <a
                  href="https://www.linkedin.com/in/ashtonaxe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <a
                  href="https://github.com/AshtonAxe"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <a
                  href="https://antinsight.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ant AI Website"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-6"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ashtonHeadshot}
                  alt="Ashton Axe - MIT Computer Science and Molecular Biology Student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
