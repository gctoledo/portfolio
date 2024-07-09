import Link from "next/link";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-16 bg-[#222222] fixed top-0 left-0 z-50">
      <div className="container w-full mx-auto">
        <button className="w-full h-16 pr-3 flex items-center justify-end cursor-pointer md:hidden">
          <Menu />
        </button>

        <nav className="hidden md:block">
          <ul className="flex h-16 w-full items-center justify-center gap-20">
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>Sobre mim</Link>
            </li>
            <li>
              <Link href={"#"}>Projetos</Link>
            </li>
            <li>
              <Link href={"#"}>Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
