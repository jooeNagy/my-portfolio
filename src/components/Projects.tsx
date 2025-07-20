
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "ECommerce API",
      description: "E-Commerce platform using Django REST Framework, featuring JWT authentication, product/order management, and user reviews. Enabled secure user profiles, password resets, and CRUD operations via APIs.",
      technologies: ["Django", "REST API", "JWT", "PostgreSQL"],
      viewLink: "#",
      codeLink: "#"
    },
    {
      title: "Todo API",
      description: "Developed a full-featured task management application using Django rest framework, allowing users to create, update and organize tasks.",
      technologies: ["Django", "REST API", "Task Management"],
      viewLink: "#",
      codeLink: "#"
    },
    {
      title: "Smart PharmaNet",
      description: "An AI-driven network enabling real-time medicine tracking, intelligent redistribution between pharmacies, and patient-facing search to optimize healthcare supply chains.",
      technologies: ["AI", "Real-time Tracking", "Healthcare", "Network"],
      viewLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover-scale group"
            >
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                    onClick={() => window.open(project.viewLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                    onClick={() => window.open(project.codeLink, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
