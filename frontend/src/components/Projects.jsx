import React, { useState } from "react";
import { portfolioData } from "../mock";
import { Layers, ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Deep Learning", "Machine Learning", "Conversational AI"];
  
  const filteredProjects = filter === "All" 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);
  
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center gap-3 mb-12">
            <Layers className="w-6 h-6 text-gray-400" />
            <h2 className="text-sm font-light tracking-widest uppercase text-gray-500">
              Selected Work
            </h2>
          </div>
          
          <h3 className="text-5xl md:text-6xl font-light tracking-tight mb-16">
            Projects
          </h3>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm font-light border transition-all hover:-translate-y-0.5 ${
                  filter === cat 
                    ? "bg-black text-white border-black" 
                    : "bg-white text-black border-gray-300 hover:border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group border-0 shadow-none bg-gray-50 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-light tracking-wider uppercase text-gray-500">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                  </div>
                  
                  <h4 className="text-2xl font-light tracking-tight mb-3 group-hover:text-black transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm font-light leading-relaxed text-gray-600 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(tech => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-light bg-white border border-gray-200 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-xs font-light text-gray-400">
                    {project.year}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;