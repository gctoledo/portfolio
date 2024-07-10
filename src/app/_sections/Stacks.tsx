import { Stacks as _Stacks } from "@/app/_types/stacks";
import SectionTitle from "../_components/SectionTitle";
import StackCard from "../_components/StackCard";

const stacks: _Stacks[] = [
  _Stacks.HTML,
  _Stacks.CSS,
  _Stacks.Javascript,
  _Stacks.Typescript,
  _Stacks.React,
  _Stacks.Next,
  _Stacks.Node,
  _Stacks.Prisma,
  _Stacks.PostgreSQL,
  _Stacks.Jest,
  _Stacks.Docker,
  _Stacks.GraphQL,
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
