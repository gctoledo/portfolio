import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      animate={{ top: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="opacity-0 w-full h-16 bg-gradient-to-b from-[#222222] to-[#1a1a1a] fixed top-0 left-0 shadow-md shadow-black/30 z-50"
    >
      <div className="container w-full mx-auto">
        <button className="w-full h-16 pr-3 flex items-center justify-end cursor-pointer md:hidden">
          <Menu />
        </button>

        <nav className="hidden md:block">
          <ul className="flex h-16 w-full items-center justify-center gap-20 text-nowrap">
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#about"}>Sobre mim</Link>
            </li>
            <li>
              <Link href={"#projects"}>Projetos</Link>
            </li>
            <li>
              <Link href={"#stacks"}>Tecnologias</Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
