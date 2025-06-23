
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  const certificates = [
    "Introduction to mongoDB (Mahara-Tech)",
    "The Python and Django Learning Guide (Udemy)",
    "Introduction To Back-End Development (Meta - Coursera)",
    "Programming in Python (Meta - Coursera)",
    "Django Web Framework (Meta - Coursera)",
    "APIs / Django Rest Framework (Meta - Coursera)"
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            My academic background and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-400">
                <GraduationCap className="w-6 h-6 mr-2" />
                Formal Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Bachelor's Degree</h3>
                  <p className="text-purple-400 mb-2">Suez Canal University</p>
                  <p className="text-gray-400 mb-2">Faculty of Computer Science and Informatics</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Ismailia, Egypt</span>
                    <span className="text-cyan-400">Oct 2021 - Present</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Computer Science",
                      "Programming",
                      "Object-Oriented Programming (OOP)",
                      "Database",
                      "Data Structures",
                      "Algorithm Analysis",
                      "Networks",
                      "Neural Networks",
                      "Data Mining"
                    ].map((course) => (
                      <Badge 
                        key={course}
                        variant="secondary" 
                        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-400">
                <Award className="w-6 h-6 mr-2" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-purple-400/50 transition-colors duration-300"
                  >
                    <p className="text-gray-300">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
