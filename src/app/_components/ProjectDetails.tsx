import Link from "next/link";
import { Project } from "../_types/project";
import StackCard from "./StackCard";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="w-full space-y-5 divide-y-2 divide-white/5">
      <div className="space-y-1">
        <h3 className="font-bold">Descrição:</h3>
        <p className="text-sm">{project.description}</p>
      </div>

      <div className="space-y-1 pt-4">
        <h3>Stacks:</h3>
        <div className="flex gap-4 flex-wrap">
          {project.stacks.map((stack) => (
            <div key={stack} title={stack}>
              <StackCard type="small" stack={stack} />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <Link
          href={project.repository}
          target="_blank"
          rel="noreferrer"
          className="font-bold bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent"
        >
          Visite o repositório do projeto!
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
