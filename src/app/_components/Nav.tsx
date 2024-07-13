import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex h-16 w-full justify-center text-nowrap">
        <li>
          <NavLink
            offset={500}
            href={"#about"}
            classname="border-l-2 border-[#161513] border-opacity-35"
          >
            Sobre mim
          </NavLink>
        </li>

        <li>
          <NavLink
            offset={500}
            href={"#projects"}
            classname="border-x-2 border-[#161513] border-opacity-35"
          >
            Projetos
          </NavLink>
        </li>

        <li>
          <NavLink
            offset={500}
            href={"#stacks"}
            classname="border-r-2 border-[#161513] border-opacity-35"
          >
            Tecnologias
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
