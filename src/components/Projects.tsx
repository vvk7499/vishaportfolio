import { ExternalLink, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Wanderlust – Travel Web Service",
    year: "2025",
    description:
      "A full-stack travel stay platform with MVC architecture. Includes listing/review CRUD, country/category/price filtering, star ratings, and responsive UI.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "React", "Redux", "JWT", "Stripe API"],
    featured: true,
  },
  {
    title: "YouTube Clone",
    year: "2024",
    description:
      "A full-stack video streaming app inspired by YouTube. Features video upload, search, comments, likes, and user authentication.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    featured: true,
  },
  {
    title: "Smart Lift System",
    year: "2025",
    description:
      "AI-powered prototype with child safety. Detects and classifies users via camera using deep learning to control lift door access.",
    tech: ["Python", "OpenCV", "Raspberry Pi", "Arduino"],
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group p-6 bg-card border-primary/10 hover:border-primary/30 transition-all hover:card-glow animate-fade-in-up cursor-pointer relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.year}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/20 bg-primary/5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-primary/10 transition-all"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
