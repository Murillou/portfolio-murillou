export function Header() {
  return (
    <header className="flex flex-col justify-between font-poppins p-10 max-w-screen-2xl mx-auto bg-gray text-gray-text md:flex-row">
      <div>DevMori</div>
      <ul className="flex gap-10">
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Skills</li>
        <li>Contato</li>
      </ul>
    </header>
  );
}
