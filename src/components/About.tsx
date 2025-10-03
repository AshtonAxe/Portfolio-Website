export const About = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-foreground">
            Hi! My name is Ashton and I am a junior at MIT studying computer
            science and molecular biology. I am deeply interested in AI drug
            discovery and entrepreneurship. I started my first company, Ant, a
            few months ago and you can find more information on it below. I am
            also currently working in the Barzilay lab to improve the Boltz
            model's performance on protein-glycan interactions.
          </p>
        </div>
      </div>
    </section>
  );
};
