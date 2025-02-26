"use client";

import { useContext } from "react";
import Image from "next/image";
import { SquareArrowUpRight } from "lucide-react";
import { Project } from "../_types/project";
import { ModalContext } from "../_context/ModalContext";
import ProjectDetails from "./ProjectDetails";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { openModal } = useContext(ModalContext);

  const openProjectModal = () => {
    openModal(<ProjectDetails project={project} />, project.name);
  };

  return (
    <div className="bg-[#2A2A2A] shadow-lg shadow-black/30 rounded-xl mb-2 grid grid-rows-[70%_30%]">
      <div className="relative w-52 md:w-80 h-48 opacity-85 hover:opacity-100 duration-200">
        <Image
          src={project.image}
          sizes="(100%, 100%)"
          priority
          fill
          className="object-cover rounded-t-xl"
          quality={100}
          alt="Projeto de portfólio"
        />
      </div>

      <button
        className="w-full flex justify-between px-4 mt-6 md:mt-5 items-center cursor-pointer text-left"
        onClick={openProjectModal}
      >
        <div>
          <span className="font-bold text-[#C5C5C5] text-xs uppercase hidden md:block">
            Clique aqui para saber mais!
          </span>

          <h2 className="uppercase font-extrabold hover:tracking-widest duration-300">
            {project.name}
          </h2>
        </div>

        <SquareArrowUpRight />
      </button>
    </div>
  );
};

export default ProjectCard;
