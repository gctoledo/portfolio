import SectionTitle from "../_components/SectionTitle";
import StackCard from "../_components/StackCard";

const stacks: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "Prisma",
  "PostgreSQL",
  "Jest",
  "Docker",
  "GraphQL",
];

const Stacks = () => {
  return (
    <div className="space-y-6" id="stacks">
      <SectionTitle type="blue">Tecnologias</SectionTitle>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-6 justify-items-center">
        {stacks.map((stack) => (
          <StackCard stack={stack} key={stack} />
        ))}
      </div>
    </div>
  );
};

export default Stacks;
