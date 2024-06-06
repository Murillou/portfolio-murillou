import { FaGithub, FaLinkedin } from 'react-icons/fa';
import perfilImage from '../../assets/minha-foto.jpeg';

export function Perfil() {
  return (
    <main className="flex items-center gap-40 max-w-screen-2xl mx-auto p-10">
      <section>
        <div>
          <img
            className="rounded-full border-2 border-solid border-red-900 "
            src={perfilImage}
            alt=""
          />
        </div>
      </section>

      <section className="space-y-5">
        <h1 className="font-extrabold font-poppins text-4xl text-gray-text ">
          Olá, me chamo Murillo Vinícius! :D
        </h1>
        <p className="font-semibold font-mono text-2xl text-slate-100">
          Desenvolvedor Front-End
        </p>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/murillo-vin%C3%ADcius-ferreira-pontes-5a7595219/"
            target="_blank"
          >
            <FaLinkedin className="text-blue-500" size={50} />
          </a>
          <a href="https://www.github.com/Murillou" target="_blank">
            <FaGithub className="text-white" size={50} />
          </a>
        </div>
      </section>
    </main>
  );
}
