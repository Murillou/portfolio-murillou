import { AboutMe } from './components/AboutMe/AboutMe';
import { Header } from './components/Header';
import { Perfil } from './components/Perfil/Perfil';
// import { Skills } from './components/Skills/Skills';

export function App() {
  return (
    <>
      <Header />
      <Perfil />
      <AboutMe />
      {/* <Skills /> */}
    </>
  );
}
