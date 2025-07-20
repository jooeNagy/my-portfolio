
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

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover-scale overflow-hidden backdrop-blur-sm"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0">
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-slate-800 to-slate-700 text-cyan-300 rounded-full text-sm border border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover-scale"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 font-medium"
                    onClick={() => window.open(project.viewLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-slate-600 bg-slate-800/50 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/50 hover:shadow-lg transition-all duration-300 font-medium backdrop-blur-sm"
                    onClick={() => window.open(project.codeLink, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source
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
