import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  subject: z.string().trim().min(3, "Assunto deve ter pelo menos 3 caracteres").max(200),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form
      const validatedData = contactSchema.parse(formData);

      // Encode message for WhatsApp
      const whatsappMessage = encodeURIComponent(
        `*Nova mensagem do site*\n\n*Nome:* ${validatedData.name}\n*Email:* ${validatedData.email}\n*Assunto:* ${validatedData.subject}\n\n*Mensagem:*\n${validatedData.message}`
      );
      
      // Open WhatsApp
      window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');

      // Show success message
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactForm> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactForm] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-20 sm:opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Entre em <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contato</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Tem um projeto em mente? Vamos conversar e transformar sua ideia em realidade
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8 animate-slide-up">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Vamos trabalhar juntos!</h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                  Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de colaboração.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium mb-1 text-sm sm:text-base">Email</p>
                    <a href="mailto:pablocomercial.contato@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-all">
                      pablocomercial.contato@gmail.com
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Telefone</p>
                    <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary transition-colors">
                      +55 (11) 99999-9999
                    </a>
                  </div>
                </div> */}

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium mb-1 text-sm sm:text-base">Localização</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Lauro de Freitas, Bahia, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 rounded-2xl bg-card border border-border">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name" className="text-sm">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className={errors.name ? "border-destructive text-sm" : "text-sm"}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-sm">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className={errors.email ? "border-destructive text-sm" : "text-sm"}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="subject" className="text-sm">Assunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sobre o que você quer falar?"
                    className={errors.subject ? "border-destructive text-sm" : "text-sm"}
                  />
                  {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-sm">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me sobre seu projeto..."
                    rows={5}
                    className={errors.message ? "border-destructive text-sm" : "text-sm"}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-sm sm:text-base"
                  disabled={isSubmitting}
                  variant="hero"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
