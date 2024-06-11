import { SiTypescript } from 'react-icons/si';
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
    <main className="mt-24 max-w-5xl mx-auto" id="skills">
      <SiTypescript className="text-blue-500" size={100} data-aos="fade-up" />
    </main>
  );
}
