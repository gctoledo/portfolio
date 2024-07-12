import Image from "next/image";
import { SquareArrowUpRight } from "lucide-react";
import { Project } from "../_types/stacks";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-[#2A2A2A] shadow-lg shadow-black/30 rounded-xl mb-2 grid grid-rows-[70%_30%]">
      <div className="relative w-52 md:w-80 h-48 opacity-85 hover:opacity-100 duration-200">
        <Image
          src={project.image}
          fill
          className="object-cover rounded-t-xl"
          quality={100}
          alt="Projeto de portfólio"
        />
      </div>

      <div className="w-full flex justify-between px-4 mt-6 md:mt-5 items-center cursor-pointer">
        <div>
          <span className="font-bold text-[#C5C5C5] text-xs uppercase hidden md:block">
            Clique aqui para saber mais!
          </span>

          <h2 className="uppercase font-extrabold hover:tracking-widest duration-300">
            {project.name}
          </h2>
        </div>

        <SquareArrowUpRight />
      </div>
    </div>
  );
};

export default ProjectCard;
