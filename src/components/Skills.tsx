import { useState } from "react";
import { Code, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiReact, SiNextdotjs, SiNodedotjs, SiLaravel, SiTypescript, SiPostgresql, SiMongodb, SiDocker } from "react-icons/si";
import { IconType } from "react-icons";

const technologies: { name: string; icon: IconType; color: string }[] = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PHP/Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

const education = [
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "UniFECAF",
    period: "2023 - 2025",
    description: "Formação acadêmica ADS, explorando conceitos de algoritmos, estruturas de dados e engenharia de software.",
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"tech" | "education">("tech");

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minhas <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Habilidades</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combinando expertise técnica com experiência prática para entregar soluções de alta qualidade
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <Button
              variant={activeTab === "tech" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("tech")}
              className="gap-2 w-full sm:w-auto"
            >
              <Code className="w-5 h-5" />
              Tecnologias
            </Button>
            <Button
              variant={activeTab === "education" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("education")}
              className="gap-2 w-full sm:w-auto"
            >
              <GraduationCap className="w-5 h-5" />
              Formação
            </Button>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            {activeTab === "tech" ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="group relative p-8 rounded-xl bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl animate-slide-up flex flex-col items-center text-center overflow-hidden"
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        boxShadow: `0 0 0 0 ${tech.color}20`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 20px 40px -10px ${tech.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 0 ${tech.color}20`;
                      }}
                    >
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${tech.color}05, ${tech.color}10)`
                        }}
                      />
                      <div 
                        className="relative z-10 w-16 h-16 mb-4 flex items-center justify-center rounded-lg bg-muted/50 transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${tech.color}10`
                        }}
                      >
                        <IconComponent 
                          className="w-10 h-10 transition-colors duration-300" 
                          style={{ color: tech.color }}
                        />
                      </div>
                      <h3 
                        className="relative z-10 font-bold text-lg text-foreground transition-colors duration-300"
                        style={{
                          color: undefined
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = tech.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '';
                        }}
                      >
                        {tech.name}
                      </h3>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.title}
                    className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{edu.title}</h3>
                    <p className="text-sm text-primary mb-1">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mb-3">{edu.period}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
