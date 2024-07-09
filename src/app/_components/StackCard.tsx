import Image from "next/image";

interface StackCardProps {
  stack: string;
}

const StackCard = ({ stack }: StackCardProps) => {
  return (
    <div className="flex items-center justify-center w-36 h-36 bg-gradient-to-b from-[#2A2A2A] to-[#2A2A2A]/10 rounded-lg lg:grayscale duration-200 hover:grayscale-0">
      <Image
        src={`/icons/${stack}.svg`}
        width={80}
        height={80}
        alt="Ícone HTML"
      />
    </div>
  );
};

export default StackCard;
