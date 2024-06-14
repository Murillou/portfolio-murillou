import { useState } from 'react';
import { ThemeToggle } from '../Theme/ThemeToggle';
import { useTheme } from '../../context/ThemeContext.';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export function Header({ scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex flex-col justify-around  items-center font-poppins p-5 max-w-7xl mx-auto md:flex-row lg:justify-between relative">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div>DevMori</div>
          <div className="flex gap-5 md:hidden">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <section className="flex flex-row items-center">
          <ul
            className={`fixed top-0 right-0 h-full flex flex-col gap-10 p-10 transition-transform duration-300 ease-in-out transform ${
              isMenuOpen ? 'translate-x-0 w-1/2 bg-gray' : 'translate-x-full'
            } md:static md:flex md:flex-row md:w-auto md:translate-x-0 z-20 ${
              theme === 'dark' ? 'bg-gray' : 'bg-white'
            }`}
          >
            <button className="self-end md:hidden" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <li
              className={`cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
                theme === 'dark'
                  ? 'hover:text-green-500'
                  : 'hover:text-blue-500'
              }`}
            >
              <a onClick={() => scrollToSection('about')}>Sobre mim</a>
            </li>
            <li
              className={`cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
                theme === 'dark'
                  ? 'hover:text-green-500'
                  : 'hover:text-blue-500'
              }`}
            >
              <a onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li
              className={`cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
                theme === 'dark'
                  ? 'hover:text-green-500'
                  : 'hover:text-blue-500'
              }`}
            >
              <a onClick={() => scrollToSection('projects')}>Projetos</a>
            </li>
          </ul>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </section>
      </header>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
