import { CardProject } from './CardProject';
import coffeeDelivery from '../../assets/coffee-delivery.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext.';

export function Projects() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
  const projetos = [
    {
      image: coffeeDelivery,
      description: 'E-commerce que simula um delivery de café ',
      languages: ['React', 'TypeScript', 'TailWindCss'],
      repository: 'https://github.com/Murillou/coffee-delivery',
      deploy: 'https://coffee-delivery.murillou.dev/',
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col max-w-7xl mx-auto p-5"
      data-aos="fade-up"
    >
      <h2
        className={`text-3xl font-bold text-center mb-8 ${
          theme === 'dark' ? 'text-green-600' : 'text-slate-950'
        }`}
      >
        Meus Projetos
      </h2>
      <div className="">
        {projetos.map((projeto, index) => (
          <CardProject
            key={index}
            image={projeto.image}
            description={projeto.description}
            languages={projeto.languages}
            repository={projeto.repository}
            deploy={projeto.deploy}
          />
        ))}
      </div>
    </section>
  );
}
