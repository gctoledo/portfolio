import Image from "next/image";
import AboutActions from "../_components/AboutActions";

const About = () => {
  return (
    <div className="flex flex-col gap-9 items-center text-center">
      <div className="flex items-center justify-center w-[164px] h-[164px] md:w-[218px] md:h-[218px] rounded-full bg-gradient-to-br from-[#FF8660] to-[#9A33FF]">
        <div className="overflow-hidden rounded-full">
          {" "}
          <div className="w-[152px] h-[152px] md:w-[206px] md:h-[206px] relative rounded-full opacity-95 hover:opacity-100 hover:scale-110 duration-200">
            <Image
              src={"/avatar.jpg"}
              quality={100}
              fill
              alt="Avatar"
              className="object-cover rounded-full "
            />
          </div>
        </div>
      </div>

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

      <h2 className="w-full md:w-1/3 text-secondary font-light text-sm">
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
