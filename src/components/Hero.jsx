import React from "react";

const Hero = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-black text-white">
      
   
      <div className="relative flex-shrink-0 max-w-xs overflow-hidden bg-cover bg-no-repeat text-center">
        <img 
          src="/image/myimage.jpg"  
          alt="My Profile" 
          className="w-44 h-44 md:w-56 md:h-56 max-w-xs transition duration-300 ease-in-out 
                     hover:scale-110 shadow-xl shadow-blue-500/50 border-4 border-black object-cover"
        />
        <h5 className="mt-4 text-xl font-medium leading-tight text-white">Anmol Gupta</h5>
        <p className="text-neutral-400 dark:text-neutral-300">Full Stack Developer</p>
      </div>

      <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold">About</h1>
        <p className="text-lg text-gray-400 mt-3 leading-relaxed">
          4th-year IT student & Full Stack Developer skilled in React, HTML, Tailwind CSS, Python, and Node.js.  
          I’ve built projects like <span className="text-blue-400 font-semibold">MarketPulse</span> and <span className="text-blue-400 font-semibold">Sheild</span> (IoT-integrated safety app).  
          As a Placement Assistance Cell coordinator, I support career initiatives.  
          <span className="block mt-2 text-white font-medium">
            Achievements: Top 10 in Avishkar, 2nd in Technical Poster Making, impactful college projects.
          </span>
        </p>

        {/* Download Resume Button */}
        <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <a 
            href="https://drive.google.com/file/d/1oxffyotH5wkj9zxZmoi2DXMcspLcI0bb/view?usp=sharing"
            target="_blank"
            download
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 
                      transition duration-300 ease-out border-2 border-purple-700 rounded-full shadow-md group"
          >
            {/* Hover Effect (Icon Appears on Hover) */}
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 
                            -translate-x-full bg-purple-800 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            
            {/* Default Text */}
            <span className="relative">Download Resume</span>
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
