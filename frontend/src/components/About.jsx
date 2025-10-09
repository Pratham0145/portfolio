import React from "react";
import { portfolioData } from "../mock";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="w-6 h-6 text-gray-400" />
            <h2 className="text-sm font-light tracking-widest uppercase text-gray-500">
              About
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-8">
                Transforming ideas into intelligent solutions
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed text-gray-700">
                {portfolioData.personal.bio}
              </p>
              <p className="text-lg font-light leading-relaxed text-gray-700">
                With expertise spanning machine learning, deep learning, and conversational AI, 
                I partner with organizations to design and deploy AI systems that drive measurable business impact.
              </p>
              <p className="text-lg font-light leading-relaxed text-gray-700">
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