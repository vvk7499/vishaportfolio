import { Badge } from "@/components/ui/badge";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redux",
  "EJS",
  "JWT",
  "Bootstrap",
  "Tailwind CSS",
  "Stripe API",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-6 py-3 text-base bg-card border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 cursor-default"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
