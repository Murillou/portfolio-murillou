import { SiTypescript, SiTailwindcss, SiVim } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { MdHtml, MdCss } from 'react-icons/md';
import { FaNode, FaSass } from 'react-icons/fa6';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <main
      className="flex flex-col items-center justify-center gap-10 my-24 max-w-3xl mx-auto"
      data-aos="fade-up"
    >
      <div>
        <h1 className="font-bold text-3xl md:text-5xl text-green-500">
          Skills
        </h1>
        <p className="text-lg text-gray-600"></p>
      </div>

      <div className="flex flex-wrap justify-center text-gray-text gap-10">
        <div className="flex flex-col items-center">
          <MdHtml size={100} className="text-orange-400" />
          <p className="text-lg text-gray-700 mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <MdCss size={100} className="text-blue-400" />
          <p className="text-lg text-gray-700 mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript className="text-blue-500" size={100} />
          <p className="text-lg text-gray-700 mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-400" size={100} />
          <p className="text-lg text-gray-700 mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNode size={100} className="text-green-800" />
          <p className="text-lg text-gray-700 mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss size={100} className="text-teal-400" />
          <p className="text-lg text-gray-700 mt-2">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaSass size={100} className="text-pink-400" />
          <p className="text-lg text-gray-700 mt-2">Sass</p>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineConsoleSql className="text-orange-400" size={100} />
          <p className="text-lg text-gray-700 mt-2">SQL</p>
        </div>
      </div>
    </main>
  );
}
