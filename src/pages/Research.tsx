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
            {/* Current Research - Barzilay Lab */}
            <Card className="p-8">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Protein-Glycan Binding Affinity Prediction
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge>Ongoing</Badge>
                    <Badge variant="secondary">Boltz-2</Badge>
                    <Badge variant="secondary">Molecular Dynamics</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Affiliation:</span> Barzilay Lab, MIT CSAIL & J-Clinic
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Start Date:</span> September 2025
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Training <a href="https://github.com/jwohlwend/boltz" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-bold">Boltz-2</a> on 500k measurements from LectinOracle for
                  protein–glycan binding affinity prediction. Designing model
                  enhancements in PyTorch to integrate molecular dynamics features
                  to improve accuracy for highly flexible glycan structures.
                </p>
              </div>
            </Card>

            {/* Main Research Paper */}
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Cross-Attention Fusion of 3D Drug Geometry and Protein
                    Language Models for Binding Affinity Prediction
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Deep Learning</Badge>
                    <Badge variant="secondary">Drug Discovery</Badge>
                    <Badge variant="secondary">Graph Neural Networks</Badge>
                    <Badge variant="secondary">ESM-2</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">Cross-Attention</Badge>
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
                        BindingDB with 1.3M protein-ligand pairs
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
                    <a
                      href="/ligand_protein_affinity_prediction.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                </div>
              </div>
            </Card>

            {/* Kellis Lab */}
            <Card className="p-8">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                  AI-Driven Clinical Data Analysis & Visualization
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">EHR Data</Badge>
                    <Badge variant="secondary">Computational Biology</Badge>
                    <Badge variant="secondary">Bioinformatics</Badge>
                    <Badge variant="secondary">Clustering</Badge>
                    <Badge variant="secondary">ClinicalBERT</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Affiliation:</span> Kellis Lab, MIT CSAIL & BROAD Institute
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Duration:</span> September 2024 - February 2025
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                Presented to Sanofi AI team on clustering their EHR multimodal data for 2000 Alzheimer's patients to predict the next best steps for patients.
                Developed <a href="https://home.withmantis.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-bold">Mantis</a>, interactive space created in TypeScript that uses advanced AI to transform complex data
                landscapes into visual, navigable maps.
                </p>
              </div>
            </Card>

            {/* Rasmussen Lab */}
            <Card className="p-8">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                  Genomic Deep Learning for Metabolite Prediction
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Structural Biology</Badge>
                    <Badge variant="secondary">Protein Engineering</Badge>
                    <Badge variant="secondary">Cryo-EM</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Affiliation:</span> Rasmussen Lab, UCPH Center for Basic Metabolic Research
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Duration:</span> June 2024 - August 2024
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                Worked with a deep learning software, <a href="https://github.com/arnor-sigurdsson/EIR-auto-GP" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-bold">EIR</a>, to train on 300,000 patients from the UK Biobank using two million SNPs and phenotypic data to predict metabolite levels in the blood
                </p>
              </div>
            </Card>

            {/* Langer Lab */}
            <Card className="p-8">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Synthesizing new Drug for Capsule
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Drug Delivery</Badge>
                    <Badge variant="secondary">Biomaterials</Badge>
                    <Badge variant="secondary">Nanomedicine</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Affiliation:</span> Langer Lab, MIT
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Duration:</span> October 2023 - May 2024
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                Optimized protocol to synthesize E.coli Nissle and coat in by layer-by-layer polymer encapsulation. This new drug was created for the Langer Lab <a href="https://news.mit.edu/2019/orally-deliver-drugs-injected-1007" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-bold">Drug Capsule</a> to combat IBD.
                </p>
              </div>
            </Card>

            {/* IncellDx */}
            <Card className="p-8">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Prostate Cancer Biomarker Discovery
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Flow Cytometry</Badge>
                    <Badge variant="secondary">Biomarker Discovery</Badge>
                    <Badge variant="secondary">Multivariate Analysis</Badge>
                    <Badge variant="secondary">Clinical Diagnostics</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Affiliation:</span> IncellDx
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Duration:</span> June 2022 - September 2022
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Prepared and analyzed human urine samples by flow cytometry to identify a novel biomarker of prostate cancer through multivariate analysis. Contributed to clinical diagnostic research focused on improving early detection methods for prostate cancer.
                </p>
              </div>
            </Card>

            {/* Halo Diagnostics */}
            <Card className="p-8">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    AI-Powered Prostate Cancer Detection
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">Medical AI</Badge>
                    <Badge variant="secondary">Radiology</Badge>
                    <Badge variant="secondary">Algorithm Development</Badge>
                    <Badge variant="secondary">Data Curation</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Affiliation:</span> Halo Diagnostics
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Duration:</span> June 2021 - September 2021
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Helped develop prostate cancer AI that identifies prostate cancer in radiology images. Contributed to label curation and automation processes for algorithm development, supporting the creation of advanced diagnostic tools for medical imaging.
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
