
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <Avatar className="w-80 h-80 md:w-96 md:h-96 border-4 border-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 shadow-2xl">
                <AvatarImage 
                  src="/images/profile.jpg" 
                  alt="Youssef Nagy" 
                  className="object-cover"
                />
                <AvatarFallback className="text-6xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                  YN
                </AvatarFallback>
              </Avatar>
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Youssef Nagy
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Software Engineer - Backend Developer
              </div>
              
              <div className="text-lg text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                Cairo, Egypt
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 hover-scale"
                  onClick={() => window.open("https://hopp.bio/youssef-nagy")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover-scale"
                  onClick={() => window.open("https://drive.google.com/file/d/10RzEkUUCRvZ36e2Ey6jWtAoWqghAmgRp/view?usp=sharing", "_blank")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <a 
                  href="https://github.com/jooeNagy" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/youssef-nagy-848393254?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhjtXV7o2ThmHv9vPLVLHVw%3D%3D" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:ynagy0424@gmail.com" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover-scale"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>
      </div>
    </section>
  );
};
