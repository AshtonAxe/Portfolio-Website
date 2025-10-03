import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, FileText, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/Navigation";

const Publications = () => {
  const { toast } = useToast();

  const handleCopyBibTeX = () => {
    const bibtex = `@article{axe2025crossattention,
  title={Cross-Attention Fusion of 3D Drug Geometry and Protein Language Models for Interpretable Binding Affinity Prediction},
  author={Axe, Ashton and Larsen, Daniel and Shapiro, Nathan and Sowards, Steffan},
  year={2025},
  journal={Unpublished}
}`;
    navigator.clipboard.writeText(bibtex);
    toast({
      title: "BibTeX copied!",
      description: "Citation has been copied to clipboard.",
    });
  };

  const publications = [
    {
      title:
        "Cross-Attention Fusion of 3D Drug Geometry and Protein Language Models for Interpretable Binding Affinity Prediction",
      authors: "Ashton Axe, Daniel Larsen, Nathan Shapiro, Steffan Sowards",
      year: "2025",
      abstract:
        "Accurately predicting drug–protein binding affinity remains a critical challenge in computational drug discovery. We present a hybrid deep learning framework that synergizes three-dimensional ligand geometry with evolutionary protein sequence patterns to predict binding affinity (pKi).",
      metrics: {
        rmse: "1.05 pKi",
        r2: "0.40",
        dataset: "BindingDB (1.3M pairs)",
      },
      tags: ["Deep Learning", "Drug Discovery", "GNN", "ESM-2", "Cross-Attention"],
      github:
        "https://github.com/AshtonAxe/Cross-Attention-of-3D-Drug-Geometry-and-ESM2-Protein-Embeddings-for-Binding-Affinity-Prediction",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Publications & Writing
            </h1>
            <p className="text-xl text-muted-foreground">
              Research contributions to AI-driven drug discovery
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="p-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-2xl font-bold flex-1 leading-tight pr-4">
                        {pub.title}
                      </h2>
                      <Badge className="flex-shrink-0">{pub.year}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{pub.authors}</p>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>

                  <div>
                    <h3 className="font-semibold mb-3">Key Metrics</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">
                          RMSE
                        </div>
                        <div className="font-bold text-primary">
                          {pub.metrics.rmse}
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">
                          R² Score
                        </div>
                        <div className="font-bold text-primary">
                          {pub.metrics.r2}
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">
                          Dataset
                        </div>
                        <div className="font-bold text-primary">
                          {pub.metrics.dataset}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <FileText className="mr-2 h-4 w-4" />
                        Read Paper (PDF)
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={pub.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button variant="outline" onClick={handleCopyBibTeX}>
                      <Copy className="mr-2 h-4 w-4" />
                      Cite (BibTeX)
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card className="p-8 bg-muted/30">
              <h2 className="text-2xl font-bold mb-4">Skills & Coursework</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Technical Skills</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">
                        AI/ML
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">PyTorch</Badge>
                        <Badge variant="outline">LLM Fine-Tuning</Badge>
                        <Badge variant="outline">Clinical BERT</Badge>
                        <Badge variant="outline">Protein Language Models</Badge>
                        <Badge variant="outline">RAG</Badge>
                        <Badge variant="outline">Dimensionality Reduction</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">
                        Programming & Tools
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">R</Badge>
                        <Badge variant="outline">Git</Badge>
                        <Badge variant="outline">wandb</Badge>
                        <Badge variant="outline">Vertex AI</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Relevant Coursework</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      Deep Learning in the Life Sciences
                    </Badge>
                    <Badge variant="secondary">
                      Machine Learning in Molecular and Cellular Biology
                    </Badge>
                    <Badge variant="secondary">Biochemistry</Badge>
                    <Badge variant="secondary">
                      Fundamentals of Programming
                    </Badge>
                    <Badge variant="secondary">
                      Linear Algebra and Optimization
                    </Badge>
                    <Badge variant="secondary">
                      Mathematics for Computer Science
                    </Badge>
                    <Badge variant="secondary">Organic Chemistry</Badge>
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

export default Publications;
