import React from 'react';
import { FaHeart } from "react-icons/fa";
function Footer() {
  return (
    <footer className="pt-5 text-gray-700 dark:text-white font-semibold flex">
      <span>Developed with  </span> <FaHeart />

      <a
        className="text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300 "
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
           By Yogesh
      </a>

      
    </footer>
  );
}

export default Footer;
