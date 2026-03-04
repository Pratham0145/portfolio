import React from "react";
import { portfolioData } from "../mock";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6 text-gray-500" />
            <h2 className="text-sm font-light tracking-widest uppercase text-gray-500">
              Journey
            </h2>
          </div>
          
          <h3 className="text-5xl md:text-6xl font-light tracking-tight mb-16 text-white">
            Experience
          </h3>
          
          <div className="space-y-16">
            {portfolioData.experience.map((exp, index) => (
              <div 
                key={exp.id}
                className="group relative pl-8 border-l-2 border-gray-800 hover:border-white transition-colors duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-gray-700 rounded-full group-hover:border-white group-hover:bg-white transition-all duration-300" />
                
                <div className="pb-2">
                  <span className="text-sm font-light text-gray-500">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-2xl font-light tracking-tight mb-2 text-white">
                  {exp.title}
                </h4>
                
                <p className="text-lg font-light text-gray-400 mb-4">
                  {exp.company}
                </p>
                
                <p className="text-base font-light leading-relaxed text-gray-500">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;