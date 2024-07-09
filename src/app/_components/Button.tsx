interface ButtonProps {
  type?: "primary" | "secondary";
  children: string;
}

const Button = ({ children, type = "primary" }: ButtonProps) => {
  if (type === "secondary") {
    return (
      <button className="w-40 cursor-pointer py-3 rounded-full border-2 border-white border-solid text-nowrap hover:border-transparent hover:text-[#161513] hover:bg-white duration-100">
        {children}
      </button>
    );
  }

  return (
    <button className="w-40 cursor-pointer py-3 rounded-full text-[#161513] bg-white hover:text-white hover:bg-[#161513] hover:border-2 border-white border-solid duration-100">
      {children}
    </button>
  );
};

export default Button;
