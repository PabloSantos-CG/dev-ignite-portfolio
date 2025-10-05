import { Code2, Rocket, Target, TrendingUp } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Seguindo as melhores práticas e padrões de desenvolvimento",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Aplicações otimizadas para máxima velocidade e eficiência",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Soluções que geram valor real para o seu negócio",
  },
  {
    icon: TrendingUp,
    title: "Evolução Contínua",
    description: "Sempre atualizado com as últimas tecnologias do mercado",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mim</span>
            </h2>
            <p className="text-muted-foreground text-lg">Conheça mais sobre minha jornada e expertise</p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="order-2 md:order-1 animate-slide-up">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <img
                  src={developerPortrait}
                  alt="Pablo Santos - Desenvolvedor Full Stack"
                  className="relative rounded-2xl w-full shadow-2xl"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold">Pablo Santos</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar experiências digitais excepcionais. 
                Com expertise sólida em <span className="text-primary font-semibold">Back-End</span> (Node.js, PHP/Laravel) 
                e <span className="text-secondary font-semibold">Front-End</span> (React.js, Next.js), 
                transformo desafios complexos em soluções elegantes e eficientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meu compromisso é com a <span className="text-foreground font-semibold">qualidade</span>, 
                <span className="text-foreground font-semibold"> eficiência</span> e 
                <span className="text-foreground font-semibold"> boas práticas</span>. 
                Cada projeto é uma oportunidade de superar expectativas e entregar resultados que fazem a diferença.
              </p>
              <div className="pt-4">
                <a
                  href="#projetos"
                  className="text-primary hover:text-secondary transition-colors font-semibold inline-flex items-center group"
                >
                  Explore meus projetos
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
