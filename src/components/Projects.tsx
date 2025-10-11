import { useEffect, useState } from "react";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/PabloSantos-CG/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getTechColor = (lang: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-500/20 text-yellow-500",
      TypeScript: "bg-blue-500/20 text-blue-500",
      Python: "bg-green-500/20 text-green-500",
      PHP: "bg-purple-500/20 text-purple-500",
      HTML: "bg-orange-500/20 text-orange-500",
    };
    return colors[lang || ""] || "bg-gray-500/20 text-gray-500";
  };

  return (
    <section id="projetos" className="py-12 sm:py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projetos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore alguns dos projetos que desenvolvi, demonstrando expertise em diferentes tecnologias e soluções
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          ) : (
            <div className="relative px-2 sm:px-8 md:px-12 animate-slide-up">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {repos
                    .filter(repo => repo.name.toLowerCase() !== "pablosantos-cg")
                    .map((repo) => (
                    <CarouselItem key={repo.id} className="sm:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="group h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-background flex flex-col">
                          <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                              <Github className="w-8 h-8 text-primary" />
                              <div className="flex gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Star className="w-3 h-3" />
                                  {repo.stargazers_count}
                                </span>
                                <span className="flex items-center gap-1">
                                  <GitFork className="w-3 h-3" />
                                  {repo.forks_count}
                                </span>
                              </div>
                            </div>
                            <CardTitle className="text-xl line-clamp-1">{repo.name}</CardTitle>
                            <CardDescription className="line-clamp-2 min-h-[2.5rem]">
                              {repo.description || "Projeto desenvolvido com tecnologias modernas"}
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent className="flex-1">
                            <div className="flex flex-wrap gap-2">
                              {repo.language && (
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColor(repo.language)}`}>
                                  {repo.language}
                                </span>
                              )}
                              {repo.topics.slice(0, 2).map((topic) => (
                                <span key={topic} className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </CardContent>

                          <CardFooter className="gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              onClick={() => window.open(repo.html_url, '_blank')}
                            >
                              <Github className="mr-2 w-4 h-4" />
                              Código
                            </Button>
                            {repo.homepage && (
                              <Button
                                size="sm"
                                className="flex-1"
                                onClick={() => window.open(repo.homepage, '_blank')}
                              >
                                <ExternalLink className="mr-2 w-4 h-4" />
                                Demo
                              </Button>
                            )}
                          </CardFooter>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex bg-card border-border hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="hidden sm:flex bg-card border-border hover:bg-primary hover:text-primary-foreground" />
              </Carousel>
            </div>
          )}

          {/* View All Projects Link */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/PabloSantos-CG', '_blank')}
            >
              <Github className="mr-2" />
              Ver todos os projetos no GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
