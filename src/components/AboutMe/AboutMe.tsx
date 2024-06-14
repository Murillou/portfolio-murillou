import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../../context/ThemeContext.';

export function AboutMe() {
  const { theme } = useTheme();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
  return (
    <main
      id="about"
      className="flex flex-col items-center justify-center gap-10 max-w-7xl mx-auto text-white mt-24 font-poppins"
      data-aos="fade-up"
    >
      <h1
        className={`font-bold text-3xl md:text-5xl ${
          theme === 'dark' ? 'text-green-600' : 'text-slate-950'
        }`}
      >
        Sobre mim
      </h1>

      <h1
        className={`font-mono text-center text-2xl ${
          theme === 'dark' ? 'text-gray-opacity' : 'text-slate-700'
        }`}
      >
        Quem é Murillo Vinícius?
      </h1>

      <div
        className={`max-w-5xl p-3 text-center text-md sm:text-lg space-y-3 ${
          theme === 'dark' ? 'text-gray-opacity' : 'text-slate-700'
        }`}
      >
        <p>
          Sou um amante da programação desde os 14 anos, quando tive o primeiro
          contato na robótica programando em Arduino, lembro do como se fosse
          hoje, naquele exato momento em que fiz o robôzinho andar foi onde meus
          olhos brilharam para o mundo de desenvolvedor, desde então, estudo
          para me profissionalizar na área e poder realizar meu sonho de
          trabalhar como programador!
        </p>
        <p>
          Nas horas vagas, costumo ler mangás (de preferência os clássicos),
          tocar guitarra e jogar jogos de ritmos.
        </p>
      </div>
    </main>
  );
}
