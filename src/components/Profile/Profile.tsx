import { FaGithub, FaLinkedin } from 'react-icons/fa';
import perfilImage from '../../assets/avatar.jpeg';
import ReactTypingEffect from 'react-typing-effect';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Profile() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <main
      className="flex flex-col items-center justify-around gap-5 font-poppins p-5 max-w-7xl mx-auto md:flex-row md:gap-0"
      data-aos="zoom-in-right"
    >
      <section className="flex flex-col items-center md:items-start">
        <div className="relative p-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
          <img
            className="rounded-full w-56 md:w-72 lg:w-96 transform transition-transform duration-500 hover:scale-110 hover:rotate-2 cursor-pointer"
            src={perfilImage}
            alt="Murillo Vinícius"
          />
        </div>
      </section>

      <section className="flex flex-col items-center space-y-3 md:items-start md:ml-10">
        <h1 className="font-extrabold text-xl text-center text-green-600 sm:text-3xl lg:text-4xl">
          Olá, sou Murillo Vinícius :D
        </h1>

        <div className="font-semibold text-lg  md:text-2xl">
          <ReactTypingEffect
            text={[
              '<-- Desenvolvedor Web -->',
              '<-- Guitarrista -->',
              '<-- Leitor de Mangá -->',
            ]}
            speed={80}
            eraseSpeed={50}
            typingDelay={200}
            eraseDelay={1000}
            cursorClassName="text-green-600"
          />
        </div>

        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/murillou/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <FaLinkedin className="text-blue-500" size={40} />
          </a>
          <a
            href="https://www.github.com/Murillou"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </section>
    </main>
  );
}
