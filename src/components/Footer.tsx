import { Github, Linkedin, Mail, Heart } from "lucide-react";

const quickLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/PabloSantos-CG", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pablosantos-cg", label: "LinkedIn" },
  { icon: Mail, href: "mailto:pablo@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pablo Santos
            </h3>
            <p className="text-muted-foreground text-sm">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais excepcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Pablo Santos. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              Desenvolvido com Lovable
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
