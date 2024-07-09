interface SectionTitleProps {
  type: "orange" | "blue";
  children: string;
}

const SectionTitle = ({ children, type }: SectionTitleProps) => {
  if (type === "blue") {
    return (
      <h2 className="text-3xl text-center font-extrabold uppercase bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent">
        {children}
      </h2>
    );
  }

  if (type === "orange") {
    return (
      <h2 className="text-3xl text-center font-extrabold uppercase bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
        {children}
      </h2>
    );
  }
};

export default SectionTitle;
