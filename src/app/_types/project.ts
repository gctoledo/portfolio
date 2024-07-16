export type Project = {
  name: string;
  image: string;
  stacks: string[];
  description: string;
  repository: string;
};

export interface ProjectsJSON {
  projects: Project[];
}
