import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
  return (
    <main
      className="flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto text-white mt-24"
      data-aos="fade-up"
    >
      <h1 className="font-bold text-3xl">Sobre mim</h1>

      <p className="max-w-5xl text-lg">
        Quem é Murillo Vinícius? Estou atuando na área a 1 ano e atualmente
        trabalho como freelancer, com uma sólida experiência em TypeScript,
        React, NodeJS, utilizando TailWind para estilizações, sempre aplicando
        as técnicas de Clean Code e Mobile First. Sou uma pessoa comunicativa,
        proativa e autodidata, estou sempre em busca de novos desafios para
        aprender mais e mais.
      </p>
    </main>
  );
}
