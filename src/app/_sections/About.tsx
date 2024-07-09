import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col gap-9 items-center text-center">
      <div className="w-[160px] h-[160px] md:w-[213px] md:h-[213px] relative rounded-full bg-gradient-to-br from-[#FF8660] to-[#9A33FF]">
        <Image src={"/Avatar.png"} quality={100} fill alt="Avatar" />
      </div>

      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
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

      <h2 className="w-full md:w-1/3 text-secondary font-light text-sm">
        Bem-vindo ao meu portfólio! Meu nome é Gabriel, sou desenvolvedor com
        foco na stack <span className="text-[#f7df1e]">JavaScript</span>/
        <span className="text-[#007acc]">TypeScript</span>.
        <br />
        Sou completamente apaixonado por tecnologia e como posso impactar
        pessoas com ela.
      </h2>

      <div className="flex gap-4">
        <button className="w-40 cursor-pointer py-3 rounded-full text-[#161513] bg-white">
          Contatos
        </button>

        <button className="w-40 cursor-pointer py-3 rounded-full border-2 border-white border-solid text-nowrap">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
