export enum Stacks {
  HTML = "html",
  CSS = "css",
  Javascript = "javascript",
  Typescript = "typescript",
  React = "reactjs",
  Next = "nextjs",
  Node = "nodejs",
  Prisma = "prisma",
  PostgreSQL = "postgresql",
  Jest = "jest",
  Docker = "docker",
  GraphQL = "graphql",
}

export type Project = {
  name: string;
  image: string;
  stacks: string[];
  description: string;
};

export interface ProjectsJSON {
  projects: Project[];
}
