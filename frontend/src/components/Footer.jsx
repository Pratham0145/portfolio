import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-light text-gray-400">
            © {currentYear} Prathamesh Patil. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm font-light text-gray-400 hover:text-white transition-all hover:-translate-y-0.5"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;