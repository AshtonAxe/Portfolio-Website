import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, FileText, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/Navigation";

const Research = () => {
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

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Research</h1>
            <p className="text-xl text-muted-foreground">
              Exploring AI-driven approaches to drug discovery and molecular biology
            </p>
          </div>

          <div className="space-y-8">
            {/* Main Research Paper */}
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    Cross-Attention Fusion of 3D Drug Geometry and Protein
                    Language Models for Interpretable Binding Affinity Prediction
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Deep Learning</Badge>
                    <Badge>Drug Discovery</Badge>
                    <Badge>Graph Neural Networks</Badge>
                    <Badge>ESM-2</Badge>
                    <Badge>PyTorch</Badge>
                    <Badge>Cross-Attention</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Authors:</span> Ashton Axe,
                    Daniel Larsen, Nathan Shapiro, Steffan Sowards
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Date:</span> Spring 2025
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Abstract</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Accurately predicting drug–protein binding affinity remains a
                    critical challenge in computational drug discovery. We present a
                    hybrid deep learning framework that synergizes three-dimensional
                    ligand geometry with evolutionary protein sequence patterns to
                    predict binding affinity (pKi). Ligands are encoded through
                    geometric graph neural networks (GNNs) that process atomic
                    properties (electronegativity, valence electrons, covalent
                    radius) and radial basis function (RBF)-expanded spatial
                    relationships, while proteins are represented via ESM-2
                    transformer embeddings. A multihead cross-attention mechanism
                    fuses these modalities, with protein embeddings as queries and
                    ligand features as keys/values, enabling context-aware
                    interaction modeling.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Methods & Dataset</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="font-semibold mb-2">Dataset</div>
                      <p className="text-sm text-muted-foreground">
                        BindingDB with 1.3M protein-ligand pairs (trained on 50k
                        curated pairs)
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="font-semibold mb-2">Architecture</div>
                      <p className="text-sm text-muted-foreground">
                        3-layer geometric GNN + ESM-2 embeddings + multihead
                        cross-attention
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Results</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-primary/5 rounded-lg p-4 border-2 border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-1">
                        1.05
                      </div>
                      <div className="text-sm text-muted-foreground">
                        pKi RMSE (Test Set)
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border-2 border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-1">
                        0.40
                      </div>
                      <div className="text-sm text-muted-foreground">
                        R² Score
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border-2 border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-1">
                        1.23
                      </div>
                      <div className="text-sm text-muted-foreground">
                        DeepAtom Baseline RMSE
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Button asChild>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <FileText className="mr-2 h-4 w-4" />
                      Read Full Paper (PDF)
                    </a>
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
                  <Button variant="outline" onClick={handleCopyBibTeX}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy BibTeX
                  </Button>
                </div>
              </div>
            </Card>

            {/* Current Research */}
            <Card className="p-8">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Protein-Glycan Binding Affinity Prediction
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Ongoing</Badge>
                    <Badge variant="secondary">Boltz-2</Badge>
                    <Badge variant="secondary">Molecular Dynamics</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Affiliation:</span> Barzilay Lab, MIT CSAIL & J-Clinic
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Training Boltz-2 on 500k measurements from LectinOracle for
                  protein–glycan binding affinity prediction. Designing model
                  enhancements in PyTorch to integrate molecular dynamics features
                  to improve accuracy for highly flexible glycan structures.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
