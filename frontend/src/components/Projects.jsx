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
    <section id="projects" className="py-32 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center gap-3 mb-12">
            <Layers className="w-6 h-6 text-gray-500" />
            <h2 className="text-sm font-light tracking-widest uppercase text-gray-500">
              Selected Work
            </h2>
          </div>
          
          <h3 className="text-5xl md:text-6xl font-light tracking-tight mb-16 text-white">
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
                    ? "bg-white text-black border-white shadow-lg shadow-white/20" 
                    : "bg-transparent text-gray-400 border-gray-700 hover:border-white hover:text-white"
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
                className="group border-0 shadow-none bg-gray-900/50 hover:bg-gray-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 cursor-pointer overflow-hidden backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-xs font-light tracking-wider uppercase text-gray-500">
                    {project.category}
                  </span>
                  
                  <h4 className="text-xl font-light tracking-tight mt-2 mb-3 text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm font-light leading-relaxed text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 3).map(tech => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-light bg-gray-800/50 border border-gray-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-xs font-light text-gray-600">
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