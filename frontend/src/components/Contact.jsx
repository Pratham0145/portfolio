import React from "react";
import { portfolioData } from "../mock";
import { Mail, ExternalLink, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const { personal } = portfolioData;
  
  return (
    <section id="contact" className="py-32 bg-black grid-pattern relative">
      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="animate-on-scroll opacity-0 text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-white">
            Let's work together
          </h2>
          
          <p className="text-xl font-light text-gray-400 mb-16 max-w-2xl mx-auto">
            Have a project in mind? Looking for AI/ML expertise? 
            Let's discuss how we can collaborate.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={() => window.location.href = `mailto:${personal.email}`}
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 transition-all"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.open(personal.resumeUrl, "_blank")}
              className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-6 text-base hover:shadow-lg hover:shadow-white/20 transition-all"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8">
            <a 
              href={personal.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-500 hover:text-white transition-all hover:-translate-y-1"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm font-light">Medium</span>
            </a>
            
            <a 
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-500 hover:text-white transition-all hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-light">LinkedIn</span>
            </a>
            
            <a 
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-500 hover:text-white transition-all hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-light">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;