import AboutActions from "../_components/AboutActions";
import Avatar from "../_components/Avatar";

const About = () => {
  return (
    <div className="flex flex-col gap-9 items-center text-center">
      <Avatar />

      <h1 className="text-3xl md:text-5xl font-bold leading-tight select-none">
        Escrevendo{" "}
        <span className="bg-gradient-to-br from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
          códigos
        </span>{" "}
        e<br />
        construindo{" "}
        <span className="bg-gradient-to-tl from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
          coisas
        </span>
        !
      </h1>

      <h2 className="w-full lg:w-1/3 text-secondary font-light text-sm">
        Bem-vindo ao meu portfólio! Meu nome é Gabriel, sou desenvolvedor
        full-stack com foco na stack{" "}
        <span className="text-[#f7df1e]">JavaScript</span>/
        <span className="text-[#007acc]">TypeScript</span>.
        <br />
        Sou completamente apaixonado por tecnologia e como eu consigo impactar
        pessoas com ela.
      </h2>

      <div className="flex gap-4">
        <AboutActions />
      </div>
    </div>
  );
};

export default About;
