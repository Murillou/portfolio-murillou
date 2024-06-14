import { FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';
import { useTheme } from '../../context/ThemeContext.';

interface CardProjectProps {
  image: string;
  description: string;
  languages: string[];
  repository: string;
  deploy: string;
}

export function CardProject({
  image,
  description,
  languages,
  repository,
  deploy,
}: CardProjectProps) {
  const { theme } = useTheme();

  return (
    <section
      className={`max-w-lg mx-auto overflow-hidden rounded-lg shadow-md ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-green-500 to-purple-400'
          : 'bg-gradient-to-br from-green-300 to-blue-400'
      }`}
    >
      <div className="relative overflow-hidden">
        <a href={deploy} target="_blank" rel="noopener noreferrer">
          <img
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            src={image}
            alt="Imagem do Projeto"
          />
        </a>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-lg font-bold">{description}</p>
            <div className="flex justify-center mt-2 space-x-2">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    theme === 'dark'
                      ? 'bg-purple-600 text-white'
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 mt-2 p-5">
        <a
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            theme === 'dark'
              ? 'text-black hover:text-slate-200 transition-colors duration-300'
              : 'hover:text-blue-700 transition-colors duration-300'
          }`}
        >
          <FiGithub className="inline-block mr-2" />
          Repositório
        </a>
        <a
          href={deploy}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            theme === 'dark'
              ? 'text-black hover:text-slate-200 transition-colors duration-300'
              : 'hover:text-blue-700 transition-colors duration-300'
          }`}
        >
          <GoLinkExternal className="inline-block mr-2" />
          Deploy
        </a>
      </div>
    </section>
  );
}
