import Section from "../_components/Section";
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
  "PostgreSQL",
  "Jest",
  "Java",
  "Spring",
  "Docker",
];

const Stacks = () => {
  return (
    <Section sectionId="stacks">
      <SectionTitle type="blue">Tecnologias</SectionTitle>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-6 justify-items-center">
        {stacks.map((stack) => (
          <StackCard type="large" stack={stack} key={stack} />
        ))}
      </div>
    </Section>
  );
};

export default Stacks;
