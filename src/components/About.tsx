
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate software engineer with expertise in full-stack development,
            specializing in Python, Django, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Learner</h3>
              <p className="text-gray-400">
                Quick to adapt and master new technologies, always staying current with industry trends.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Problem Solving</h3>
              <p className="text-gray-400">
                Strong analytical skills with a systematic approach to complex challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Team Work</h3>
              <p className="text-gray-400">
                Excellent communication skills and collaborative mindset for effective teamwork.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
