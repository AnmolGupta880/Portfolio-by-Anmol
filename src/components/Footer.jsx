import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <div className="flex justify-center space-x-6 mb-3">
        {/* GitHub */}
        <a
          href="https://github.com/AnmolGupta880"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition duration-300 transform hover:scale-110"
        >
          <FaGithub size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/anmol-gupta-b9bab8227/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition duration-300 transform hover:scale-110"
        >
          <FaLinkedin size={28} />
        </a>

        {/* Email */}
        <a
          href="mailto:your-anmolhg88054@gmail.com"
          className="hover:text-green-400 transition duration-300 transform hover:scale-110"
        >
          <FaEnvelope size={28} />
        </a>
      </div>

      <p className="text-sm hover:text-green-400">&copy; {new Date().getFullYear()} Anmol Gupta. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
