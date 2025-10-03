import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "ML Researcher",
      organization: "Barzilay Lab, MIT CSAIL and J-Clinic",
      location: "Cambridge, MA",
      period: "September 2025 – Present",
      description: [
        "Training Boltz-2 on 500k measurements from LectinOracle for protein–glycan binding affinity prediction, with experimental tracking in wandb",
        "Designing model enhancements in PyTorch to Boltz-2 that integrate molecular dynamics features to improve accuracy for highly flexible glycan structures",
      ],
      skills: ["PyTorch", "Boltz-2", "Molecular Dynamics", "wandb", "Protein Modeling"],
    },
    {
      title: "Co-Founder",
      organization: "Ant AI",
      location: "Cambridge, MA",
      period: "February 2025 – Present",
      description: [
        "Raised $500k pre-seed funding to co-found Ant, an MIT startup creating AI agentic personas that predict human behavior, advised by Stanford Professor Erik Brynjolfsson",
        "Finetuned LLM model via Vertex AI on human interactions, developed simulations in TypeScript with over 1000 AI agents, lead partnership with Arena Advisory Group for enterprise simulations",
      ],
      skills: ["LLM Fine-Tuning", "Vertex AI", "TypeScript", "Multi-Agent Systems", "Fundraising"],
    },
    {
      title: "Data Scientist and Software Engineer",
      organization: "Kellis Lab, MIT CSAIL and Broad Institute",
      location: "Cambridge, MA",
      period: "September 2024 – February 2025",
      description: [
        "Presented to Sanofi AI team on clustering their EHR multimodal data for 2000 Alzheimer's patients to predict the next best steps for patients",
        "Developed Mantis, interactive space created in TypeScript that uses advanced AI to transform complex data landscapes into visual, navigable maps",
      ],
      skills: ["TypeScript", "Data Clustering", "EHR Analysis", "Clinical BERT", "Visualization"],
    },
    {
      title: "Researcher",
      organization: "Rasmussen Lab, UCPH Center for Basic Metabolic Research",
      location: "Copenhagen, Denmark",
      period: "June 2024 – August 2024",
      description: [
        "Used a deep learning software, EIR, to train on 300,000 patients from the UK Biobank using two million SNPs and phenotypic data to predict metabolite levels in the blood",
      ],
      skills: ["Deep Learning", "Genomics", "UK Biobank", "Metabolomics", "EIR"],
    },
    {
      title: "Researcher",
      organization: "Langer Lab, MIT Department of Chemical Engineering",
      location: "Cambridge, MA",
      period: "October 2023 – May 2024",
      description: [
        "Synthesized and evaluated new lipids for siRNA delivery into cultured endothelial cells (Winter 2024)",
        "Coated bacteria by layer-by-layer polymer encapsulation and tested survival in simulated gastric fluid (Fall 2023)",
      ],
      skills: ["Biochemistry", "Drug Delivery", "siRNA", "Polymer Chemistry", "Cell Culture"],
    },
    {
      title: "Lab Intern",
      organization: "IncellDx",
      location: "San Carlos, CA",
      period: "June 2022 – September 2022",
      description: [
        "Conducted literature searches to inform experimental design; independently conducted and analyzed experiments",
      ],
      skills: ["Laboratory Research", "Experimental Design", "Data Analysis"],
    },
    {
      title: "Lab Intern",
      organization: "Halo Diagnostics",
      location: "Palo Alto, CA",
      period: "June 2021 – September 2021",
      description: [
        "Prepared and analyzed human urine samples by flow cytometry to identify a novel biomarker of prostate cancer through multivariate analysis",
        "Helped develop prostate cancer AI that identifies prostate cancer in radiology images. Helped with label curation and automation for algorithm development",
      ],
      skills: ["Flow Cytometry", "Biomarker Discovery", "Medical AI", "Radiology", "Data Curation"],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 max-w-5xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
            <p className="text-xl text-muted-foreground">
              Research and professional journey in AI and biotech
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

                  <Card className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-3">
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium">{exp.organization}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
