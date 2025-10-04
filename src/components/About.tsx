export const About = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-foreground">
          Hi! My name is Ashton and I am a junior at MIT studying Computer Science and Molecular Biology with a focus on applying artificial intelligence to accelerate drug discovery. My research in the Barzilay Lab explores protein-glycan interactions using Boltz models, advancing methods for molecular representation and predictive modeling. Beyond research, I'm the co-founder of Ant AI, a company that leverages generative agent simulations to model and predict human behavior. I'm driven by a passion for bridging science, computation, and entrepreneurship to create technologies that move discovery from theory to real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};
