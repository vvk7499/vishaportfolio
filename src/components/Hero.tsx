import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                ● Available for Work
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Vishakha Kurule</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Full Stack Developer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              I am a Full Stack Developer specializing in building responsive and scalable web applications using React.js, Node.js, and modern web technologies. Passionate about creating seamless user experiences, I combine front-end design with robust back-end functionality to deliver complete end-to-end solutions.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/10 transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-glow-pulse" />
              <img
                src={profileImage}
                alt="Vishakha Kurule"
                className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary w-6 h-6" />
        </div>
      </div>
    </section>
  );
};
