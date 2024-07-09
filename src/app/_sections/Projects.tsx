import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl text-center font-extrabold uppercase bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
        Projetos
      </h2>

      <div className="flex gap-6 overflow-x-scroll">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
