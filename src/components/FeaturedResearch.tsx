import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedResearch = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Research
          </h2>
          <p className="text-muted-foreground text-lg">
            Latest work in AI-driven drug discovery
          </p>
        </div>

        <Card className="p-8 hover:shadow-xl transition-all duration-300">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 leading-tight">
                Cross-Attention Fusion of 3D Drug Geometry and Protein Language
                Models for Interpretable Binding Affinity Prediction
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Deep Learning</Badge>
                <Badge variant="secondary">Drug Discovery</Badge>
                <Badge variant="secondary">Graph Neural Networks</Badge>
                <Badge variant="secondary">ESM-2</Badge>
                <Badge variant="secondary">Cross-Attention</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Ashton Axe, Daniel Larsen, Nathan Shapiro, Steffan Sowards
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              A hybrid deep learning framework that synergizes three-dimensional
              ligand geometry with evolutionary protein sequence patterns to
              predict binding affinity. Trained on BindingDB with 1.3M
              protein-ligand pairs using geometric GNNs and ESM-2 transformer
              embeddings.
            </p>

            <div className="grid md:grid-cols-2 gap-4 py-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary">1.05</div>
                <div className="text-sm text-muted-foreground">
                  pKi RMSE on BindingDB
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary">0.40</div>
                <div className="text-sm text-muted-foreground">
                  R² Score (Test Set)
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/research">
                  <FileText className="mr-2 h-4 w-4" />
                  Read Full Paper
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/AshtonAxe/Cross-Attention-of-3D-Drug-Geometry-and-ESM2-Protein-Embeddings-for-Binding-Affinity-Prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
