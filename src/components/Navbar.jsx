import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-black text-white fixed top-0 left-0 z-50 flex items-center justify-between px-6 shadow-md">
      <h1 className="text-xl font-bold hover:text-gray-400">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-6 items-center">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400 transition-duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          <li> <a href="#achievements" className="hover:text-gray-400 transition-duration-300"> Achievements</a></li>
          <li>
  <a href="/image/resume2.jpg" target="_blank" className="hover:text-gray-400">
    Resume
  </a>
</li>

            
            
          <li>
            <a 
              href="https://www.linkedin.com/in/anmol-gupta-b9bab8227/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="bg-gray-400 p-2 px-4 rounded-md text-black font-semibold hover:bg-rose-800 transition duration-300 shadow-md">
                LinkedIn
              </button>
            </a>
            
 
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
