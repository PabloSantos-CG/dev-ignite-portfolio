import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Background moderno de tecnologia e desenvolvimento web" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transformando <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">ideias</span> em{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">soluções</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Soluções web modernas, escaláveis e de alto desempenho para transformar suas ideias em resultados reais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="xl"
              variant="hero"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Iniciar Projeto
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button
              size="xl"
              variant="outline"
              onClick={() => window.open('https://www.linkedin.com/in/pablosantos-cg', '_blank')}
            >
              <Linkedin className="mr-2" />
              LinkedIn
            </Button>
            
            <Button
              size="xl"
              variant="outline"
              onClick={() => window.open('https://github.com/PabloSantos-CG', '_blank')}
            >
              <Github className="mr-2" />
              GitHub
            </Button>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3 justify-center pt-8">
            {["React.js", "Next.js", "Node.js", "PHP/Laravel"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20 pointer-events-none">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2 relative z-20">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
