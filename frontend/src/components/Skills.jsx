import React from "react";
import { portfolioData } from "../mock";
import { Code2 } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-black grid-pattern relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-6 h-6 text-gray-500" />
            <h2 className="text-sm font-light tracking-widest uppercase text-gray-500">
              Expertise
            </h2>
          </div>
          
          <h3 className="text-5xl md:text-6xl font-light tracking-tight mb-16 text-white">
            Technical Skills
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <div 
                key={category}
                className="group glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-light tracking-tight mb-6 border-b border-gray-700 pb-3 text-white">
                  {category}
                </h4>
                <div className="space-y-3">
                  {skills.map(skill => (
                    <div 
                      key={skill}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full transition-transform group-hover/item:scale-150" />
                      <span className="text-sm font-light text-gray-400 group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;