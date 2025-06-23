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
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-400">
                <Code className="w-6 h-6 mr-2" />
                Programming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {programmingSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 hover:border-cyan-400"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-400">
                <Database className="w-6 h-6 mr-2" />
                Frameworks & Concepts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework) => (
                  <Badge 
                    key={framework} 
                    variant="secondary" 
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 hover:border-purple-400"
                  >
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-pink-400/50 transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center text-pink-400">
                <Wrench className="w-6 h-6 mr-2" />
                Tools & Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-300 border-pink-500/30 hover:border-pink-400"
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
