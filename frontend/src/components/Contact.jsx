import React from "react";
import { portfolioData } from "../mock";
import { Mail, ExternalLink, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const { personal } = portfolioData;
  
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="animate-on-scroll opacity-0 text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            Let's work together
          </h2>
          
          <p className="text-xl font-light text-gray-600 mb-16 max-w-2xl mx-auto">
            Have a project in mind? Looking for AI/ML expertise? 
            Let's discuss how we can collaborate.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={() => window.location.href = `mailto:${personal.email}`}
              className="bg-black text-white hover:bg-black/80 px-8 py-6 text-base"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.open(personal.resumeUrl, "_blank")}
              className="border-black text-black hover:bg-black hover:text-white px-8 py-6 text-base"
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
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-all hover:-translate-y-1"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm font-light">Medium</span>
            </a>
            
            <a 
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-all hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-light">LinkedIn</span>
            </a>
            
            <a 
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-all hover:-translate-y-1"
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