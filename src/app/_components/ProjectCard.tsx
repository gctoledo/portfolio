import Image from "next/image";
import { SquareArrowUpRight } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="bg-[#2A2A2A] rounded-xl mb-2 grid grid-rows-[70%_30%]">
      <div className="relative w-52 md:w-80 h-48 opacity-85 hover:opacity-100 duration-200">
        <Image
          src={"/portfolio-project.jpg"}
          fill
          className="object-cover rounded-t-xl"
          quality={100}
          alt="Projeto de portfólio"
        />
      </div>

      <div className="w-full flex justify-between px-4 mt-6 md:mt-5 items-center cursor-pointer">
        <div>
          <span className="font-bold text-secondary text-xs uppercase hidden md:block">
            Clique aqui para saber mais!
          </span>

          <h2 className="uppercase font-extrabold hover:tracking-widest duration-300">
            Portfolio
          </h2>
        </div>

        <SquareArrowUpRight />
      </div>
    </div>
  );
};

export default ProjectCard;