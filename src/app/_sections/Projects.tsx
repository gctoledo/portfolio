import ProjectCard from "../_components/ProjectCard";
import SectionTitle from "../_components/SectionTitle";

const Projects = () => {
  return (
    <div className="space-y-6" id="projects">
      <SectionTitle type="orange">Projetos</SectionTitle>

      <div className="flex gap-6 overflow-x-scroll overflow-y-hidden px-2">
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
