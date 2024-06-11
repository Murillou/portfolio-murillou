import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AboutMe({ aboutMeRef }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
  return (
    <main
      className="flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto text-white mt-24 font-poppins"
      data-aos="fade-up"
      ref={aboutMeRef}
    >
      <h1 className="font-bold text-5xl text-green-500">Sobre mim</h1>

      <h1 className="font-mono text-2xl text-gray-opacity">
        Quem é Murillo Vinícius?
      </h1>

      <div className="max-w-5xl text-center text-lg text-gray-opacity space-y-3">
        <p>
          Sou um amante da programação desde os 14 anos, quando tive o primeiro
          contato na robótica programando em Arduino, lembro do como se fosse
          hoje, naquele exato momento em que fiz o robôzinho andar foi onde meus
          olhos brilharam para o mundo de desenvolvedor, desde então, estudo
          para me profissionalizar na área e poder realizar meu sonho de
          trabalhar como programador!
        </p>
        <p>
          Atualmente estou trabalhando como freelancer há 1 ano e também
          desenvolvendo projetos pessoais para adicionar ao portfólio, com
          sólido conhecimento em linguagens como{' '}
          <strong className="text-emerald-500 font-extrabold opacity-95">
            TypeScript
          </strong>
          , {''}
          <strong className="text-emerald-500 font-extrabold">
            React
          </strong>, {''}
          <strong className="text-emerald-500 font-extrabold">
            NodeJs
          </strong>{' '}
          {''}e começando os estudos em{' '}
          <strong className="text-emerald-500 font-extrabold">C#</strong>
        </p>

        <p>
          Nas horas vagas, costumo ler mangás (de preferência os clássicos),
          tocar guitarra e jogar jogos de ritmos .
        </p>
      </div>
    </main>
  );
}
