import { useState } from 'react';

export function Header({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex flex-col justify-around font-poppins p-5 max-w-7xl mx-auto bg-gray text-gray-text md:flex-row lg:justify-between relative ">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div>DevMori</div>
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
        <ul
          className={`fixed top-0 right-0 h-full bg-gray text-gray-text flex flex-col gap-10 p-10 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0 w-1/2' : 'translate-x-full'
          } md:static md:flex md:flex-row md:w-auto md:translate-x-0 z-20`}
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
          <li className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:text-green-500" onClick={() =>} >
            Sobre mim
          </li>
          <li className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:text-green-500">
            Skills
          </li>
          <li className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:text-green-500">
            Projetos
          </li>
          <li className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:text-green-500">
            Contato
          </li>
        </ul>
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
