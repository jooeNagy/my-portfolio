
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            My professional journey and volunteer work
          </p>
        </div>

        <div className="grid gap-8">
          {/* Professional Experience */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-400">
                <Briefcase className="w-6 h-6 mr-2" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-l-2 border-purple-400 pl-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">ITI Students Training</h3>
                  <p className="text-purple-400 mb-2">Python / Django Full Stack Web Development</p>
                  <p className="text-gray-400 mb-4">Focus on backend development with Django framework and REST APIs</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
                      Django
                    </Badge>
                    <Badge variant="secondary" className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
                      REST APIs
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Experience */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-400/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-400">
                <Users className="w-6 h-6 mr-2" />
                Volunteer Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-2 border-cyan-400 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Mish Hackers - Organiser</h3>
                    <span className="text-cyan-400 text-sm">Oct 2021 - Nov 2023</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Organized and coordinated hackathon events, fostering innovation and collaboration 
                    among developers and tech enthusiasts.
                  </p>
                </div>

                <div className="border-l-2 border-pink-400 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Mish Hackers - IT Vice Head</h3>
                    <span className="text-pink-400 text-sm">Nov 2023 - Present</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Leading IT initiatives and technical aspects of events, mentoring participants 
                    and ensuring smooth technical operations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
