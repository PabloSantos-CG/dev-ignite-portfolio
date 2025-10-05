import { useState } from "react";
import { Code, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const technologies = [
  { name: "React.js", level: 95, icon: "⚛️" },
  { name: "Next.js", level: 90, icon: "▲" },
  { name: "Node.js", level: 92, icon: "🟢" },
  { name: "PHP/Laravel", level: 88, icon: "🐘" },
  { name: "TypeScript", level: 90, icon: "🔷" },
  { name: "PostgreSQL", level: 85, icon: "🐘" },
  { name: "MongoDB", level: 82, icon: "🍃" },
  { name: "Docker", level: 80, icon: "🐳" },
];

const education = [
  {
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal",
    period: "2018 - 2022",
    description: "Formação sólida em fundamentos de computação, algoritmos e engenharia de software",
  },
  {
    title: "Certificação Full Stack JavaScript",
    institution: "Plataforma Online",
    period: "2022",
    description: "Especialização avançada em desenvolvimento web moderno com JavaScript/TypeScript",
  },
  {
    title: "AWS Certified Developer",
    institution: "Amazon Web Services",
    period: "2023",
    description: "Certificação profissional em desenvolvimento e deploy de aplicações cloud",
  },
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
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={activeTab === "tech" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("tech")}
              className="gap-2"
            >
              <Code className="w-5 h-5" />
              Tecnologias
            </Button>
            <Button
              variant={activeTab === "education" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("education")}
              className="gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              Formação
            </Button>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            {activeTab === "tech" ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up flex flex-col items-center text-center"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{tech.icon}</div>
                    <h3 className="font-semibold text-lg">{tech.name}</h3>
                  </div>
                ))}
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
