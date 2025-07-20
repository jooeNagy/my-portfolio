import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Wrench } from "lucide-react";

export const Skills = () => {
  const programmingSkills = [
    "JavaScript", "Python", "C++", "HTML", "CSS", "Django", "MySQL", "MongoDB"
  ];

  const frameworks = [
    "OOP (Object-Oriented Programming)", "SOLID Principles", "Data Structures", "Algorithms"
  ];

  const tools = [
    "VS Code", "Git", "GitHub", "Insomnia", "Rest APIs", "Pipenv"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            My technical expertise and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover-scale overflow-hidden backdrop-blur-sm">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center text-cyan-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                <Code className="w-6 h-6 mr-2 group-hover:drop-shadow-lg" />
                Programming
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {programmingSkills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-gradient-to-r from-slate-800 to-slate-700 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover-scale cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-500 hover-scale overflow-hidden backdrop-blur-sm">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center text-purple-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                <Database className="w-6 h-6 mr-2 group-hover:drop-shadow-lg" />
                Frameworks & Concepts
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <Badge 
                    key={framework} 
                    variant="secondary" 
                    className="bg-gradient-to-r from-slate-800 to-slate-700 text-purple-300 border border-purple-500/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover-scale cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 hover:border-pink-400/50 transition-all duration-500 hover-scale overflow-hidden backdrop-blur-sm">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-400/20 via-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center text-pink-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                <Wrench className="w-6 h-6 mr-2 group-hover:drop-shadow-lg" />
                Tools & Methods
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="bg-gradient-to-r from-slate-800 to-slate-700 text-pink-300 border border-pink-500/30 hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover-scale cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
