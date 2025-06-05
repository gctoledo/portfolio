import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";

interface MobileNavProps {
  close: () => void;
}

const MobileNav = ({ close }: MobileNavProps) => {
  return (
    <AnimatePresence>
      <motion.nav
        initial={{ top: -100, opacity: 0 }}
        animate={{ top: 64, opacity: 1 }}
        exit={{ top: -100, opacity: 0 }}
        className="fixed z-40 w-full md:hidden"
      >
        <ul className="w-full divide-y-2 divide-black/20">
          <li className="bg-[#222222] px-4 py-4" onClick={close}>
            <NavLink offset={500} href={"#about"}>
              Sobre mim
            </NavLink>
          </li>

          <li className="bg-[#222222] px-4 py-4" onClick={close}>
            <NavLink offset={500} href={"#projects"}>
              Projetos
            </NavLink>
          </li>

          <li className="bg-[#222222] px-4 py-4" onClick={close}>
            <NavLink offset={500} href={"#stacks"}>
              Tecnologias
            </NavLink>
          </li>

          <li className="bg-[#222222] px-4 py-4" onClick={close}>
            <NavLink offset={500} href={"#contact"}>
              Contato
            </NavLink>
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default MobileNav;
