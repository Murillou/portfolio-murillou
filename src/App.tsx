import { AboutMe } from './components/AboutMe/AboutMe';
import { Header } from './components/Header';
import { Perfil } from './components/Perfil/Perfil';
// import { Skills } from './components/Skills/Skills';

export function App() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Perfil />
      <AboutMe />
      {/* <Skills /> */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-2 right-2 md:bottom-10 md:right-10 bg-green-500 text-white p-1 rounded-full shadow-md transition duration-300 hover:bg-green-600 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
}
