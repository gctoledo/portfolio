import Image from "next/image";

interface StackCardProps {
  stack: string;
  type: "large" | "small";
}

const StackCard = ({ stack, type }: StackCardProps) => {
  const handleStyle = () => {
    if (type === "large") {
      return "w-36 h-36 bg-gradient-to-b from-[#2A2A2A] to-[#2A2A2A]/10 shadow-lg lg:grayscale hover:grayscale-0";
    }

    if (type === "small") {
      return "w-16 h-16 bg-gradient-to-b from-[#252525] to-[#202020]/10 shadow shadow";
    }
  };

  return (
    <div
      className={`px-4 flex items-center justify-center rounded-lg shadow-black/30 duration-200 hover:translate-y-[-8px] ${handleStyle()}`}
    >
      <Image
        src={`/icons/${stack.toLowerCase()}.svg`}
        width={80}
        height={80}
        alt="Ícone HTML"
      />
    </div>
  );
};

export default StackCard;
