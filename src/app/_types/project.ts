export type Project = {
  name: string;
  image: string;
  stacks: string[];
  description: string;
};

export interface ProjectsJSON {
  projects: Project[];
}
