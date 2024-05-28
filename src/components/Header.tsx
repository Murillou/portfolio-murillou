export function Header() {
  return (
    <header className="flex flex-col justify-between font-poppins p-5 max-w-screen-2xl mx-auto bg-gray text-gray-text ">
      <div>DevMori</div>
      <ul className="flex gap-3">
        <li>Sobre mim</li>
        <li>Projetos</li>
        <li>Skills</li>
        <li>Contato</li>
      </ul>
    </header>
  );
}
