import projectsJSON from "../../../public/projects/projects.json";
import ProjectCard from "../_components/ProjectCard";
import Section from "../_components/Section";
import SectionTitle from "../_components/SectionTitle";
import { Project } from "../_types/project";

const projects: Project[] = projectsJSON.data.reverse();

const Projects = () => {
  return (
    <Section sectionId="projects">
      <SectionTitle type="orange">Projetos</SectionTitle>

      <div className="flex gap-6 overflow-x-scroll overflow-y-hidden px-2 justify-start">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
