import { GraduationCap, Code2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-primary/10 hover:border-primary/30 transition-all hover:card-glow animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vishakha Kurule is a dedicated full-stack developer with a passion for building 
                  responsive, scalable web applications. Currently pursuing B.Tech in Electronics & 
                  Telecommunication Engineering, she combines technical expertise with creative 
                  problem-solving to deliver exceptional digital experiences using modern technologies 
                  like React.js and Node.js.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-primary/10 hover:border-primary/30 transition-all hover:card-glow animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="space-y-2">
                  <p className="font-medium text-primary">
                    B.Tech in Electronics & Telecommunication Engineering
                  </p>
                  <p className="text-muted-foreground">
                    JSPM's Rajarshi Shahu College of Engineering (RSCOE), Pune
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Expected Graduation: 2026
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center animate-fade-in-up">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/10">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-lg">
                Passionate about creating impactful solutions through code
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
