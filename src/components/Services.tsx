import { Globe, Server, Smartphone, Zap, ShieldCheck, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web Full Stack",
    description: "Aplicações web completas e escaláveis, do frontend ao backend, utilizando as tecnologias mais modernas do mercado.",
    features: ["React.js & Next.js", "Node.js & PHP", "APIs RESTful", "Banco de dados SQL/NoSQL"],
  },
  {
    icon: Smartphone,
    title: "Aplicações Responsivas",
    description: "Sites e sistemas que funcionam perfeitamente em todos os dispositivos, proporcionando a melhor experiência ao usuário.",
    features: ["Design Mobile-First", "PWA", "Performance otimizada", "UX/UI moderno"],
  },
  {
    icon: Server,
    title: "Arquitetura Backend",
    description: "APIs robustas e sistemas backend escaláveis com foco em performance, segurança e manutenibilidade.",
    features: ["Microserviços", "Autenticação segura", "Cache inteligente", "Testes automatizados"],
  },
  {
    icon: Zap,
    title: "Otimização de Performance",
    description: "Análise e otimização de aplicações existentes para garantir máxima velocidade e eficiência operacional.",
    features: ["Code splitting", "Lazy loading", "SEO técnico", "Lighthouse 90+"],
  },
  {
    icon: ShieldCheck,
    title: "Integração e Deploy",
    description: "CI/CD, containerização e deploy automatizado em plataformas cloud para garantir entrega contínua.",
    features: ["Docker & Kubernetes", "AWS/Vercel", "GitHub Actions", "Monitoramento"],
  },
  {
    icon: LineChart,
    title: "Consultoria Técnica",
    description: "Análise de projetos, definição de arquitetura e orientação técnica para seu time de desenvolvimento.",
    features: ["Code review", "Arquitetura de software", "Boas práticas", "Mentoria técnica"],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Serviços</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções completas de desenvolvimento que transformam sua visão em realidade digital
            </p>
          </div>

          {/* Services Carousel */}
          <div className="relative px-2 sm:px-6 md:px-12 animate-slide-up">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="group h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur">
                        <CardHeader>
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <service.icon className="w-7 h-7 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription className="text-base">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex bg-card border-border hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="hidden sm:flex bg-card border-border hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Pronto para transformar suas ideias em realidade?</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold group"
            >
              Vamos conversar sobre seu projeto
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
