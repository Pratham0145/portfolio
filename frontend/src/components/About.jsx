import React from "react";
import { portfolioData } from "../mock";
import { Sparkles, Brain, Code, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Brain, label: "AI/ML Expertise" },
    { icon: Code, label: "Production-Ready" },
    { icon: Zap, label: "Fast & Scalable" }
  ];
  
  return (
    <section id="about" className="py-32 bg-black grid-pattern relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="w-6 h-6 text-gray-500" />
            <h2 className="text-sm font-light tracking-widest uppercase text-gray-500">
              About
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-8 text-white">
                Transforming ideas into intelligent solutions
              </h3>
              
              {/* Highlights */}
              <div className="flex flex-wrap gap-4 mt-8">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 glass rounded-full"
                    >
                      <Icon className="w-4 h-4 text-white" />
                      <span className="text-sm font-light text-gray-300">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed text-gray-400">
                {portfolioData.personal.bio}
              </p>
              <p className="text-lg font-light leading-relaxed text-gray-400">
                With expertise spanning machine learning, deep learning, and conversational AI, 
                I partner with organizations to design and deploy AI systems that drive measurable business impact.
              </p>
              <p className="text-lg font-light leading-relaxed text-gray-400">
                My approach combines technical excellence with strategic thinking, 
                ensuring solutions are not just innovative but also practical and scalable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;