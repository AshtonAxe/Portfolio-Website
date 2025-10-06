import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, DollarSign, Brain } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Projects = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground">
              Building AI solutions for real-world impact
            </p>
          </div>

          <div className="space-y-8">
            {/* Ant AI */}
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-3">Ant AI</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>Co-Founder</Badge>
                      <Badge variant="secondary">LLM Fine-Tuning</Badge>
                      <Badge variant="secondary">Multi-Agent Systems</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Vertex AI</Badge>
                    </div>
                  </div>
                  <Button asChild>
                    <a
                      href="https://antinsight.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Site
                    </a>
                  </Button>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  An MIT startup creating AI agentic personas that predict human
                  behavior. We help organizations simulate complex human
                  interactions and decision-making patterns using our advanced language
                  model.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">$500K Raised</div>
                      <div className="text-sm text-muted-foreground">
                        Pre-seed funding
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">1000+ AI Agents</div>
                      <div className="text-sm text-muted-foreground">
                        In simulations
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Enterprise Partnerships</div>
                      <div className="text-sm text-muted-foreground">
                        Arena Advisory Group
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Finetuned LLM models via Vertex AI on human interaction data
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Developed TypeScript-based simulation engine for 1000+ concurrent AI agents
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Lead partnership with Arena Advisory Group for enterprise simulations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Advised by Stanford Professor Erik Brynjolfsson
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Ant AI */}
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-3">Mantis AI</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Developer</Badge>
                      <Badge variant="secondary">Clustering</Badge>
                      <Badge variant="secondary">PyTorch</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Clinical Data</Badge>
                      <Badge variant="secondary">Proteomics</Badge>
                    </div>
                  </div>
                  <Button asChild>
                    <a
                      href="https://home.withmantis.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Site
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Integrated proteomics data with EHR data into Mantis
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Developed a chatbot to answer questions about the data
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Facilitated collaboration with Sanofi and integrated their data into Mantis
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                      Presented to Sanofi AI team on clustering their EHR multimodal data for 2000 Alzheimer's patients to predict the next best steps for patients
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* CpG Island Detection */}
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-3">CpG Island Detection using Hidden Markov Model</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Developer</Badge>
                      <Badge variant="secondary">Bioinformatics</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Genomics</Badge>
                      <Badge variant="secondary">Data Modeling</Badge>
                      <Badge variant="secondary">Machine Learning</Badge>
                    </div>
                  </div>
                  <Button asChild>
                    <a
                      href="https://github.com/AshtonAxe/hmm-cpg-island-detection/tree/main"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Repo
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Implemented an eight-state Hidden Markov Model (HMM) to detect CpG islands in the human genome using human chromosome 21 as training data
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Estimated transition and emission probabilities via maximum likelihood estimation with smoothing to prevent zero-probability issues
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Achieved 0.85 sensitivity, 0.88 specificity, and 0.87 precision on the test data (chromosome 22)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Generated final transition and emission matrices and predicted CpG island regions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Built a fully reproducible workflow with customizable initialization and model parameters
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Motif Discovery using Gibbs Sampling */}
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-3">Motif Discovery using Gibbs Sampling (with CNN Baseline)</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Developer</Badge>
                      <Badge variant="secondary">Bioinformatics</Badge>
                      <Badge variant="secondary">PyTorch</Badge>
                      <Badge variant="secondary">Machine Learning</Badge>
                      <Badge variant="secondary">Genomics</Badge>
                      <Badge variant="secondary">Pattern Recognition</Badge>
                    </div>
                  </div>
                  <Button asChild>
                    <a
                      href="https://github.com/AshtonAxe/gibbs-motif-discovery"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Repo
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Implemented a Gibbs sampling algorithm for de novo DNA motif discovery, applied to CTCF binding sequences
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Iteratively refined motif positions and re-estimated a Position Weight Matrix (PWM) to identify statistically overrepresented motifs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Developed a PyTorch-based CNN baseline for motif classification, enabling direct comparison between a classical generative model and a modern discriminative neural network
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Produced interpretable motif visualizations and performance metrics across both models
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Generated final PWM matrices, motif site predictions, CNN training metrics, and learned convolutional filters
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
