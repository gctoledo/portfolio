import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: "primary" | "secondary";
  children: string;
}

const Button = ({ children, styleType = "primary", ...props }: ButtonProps) => {
  const handleButtonStyle = () => {
    if (styleType === "primary") {
      return "text-[#161513] bg-white hover:text-white hover:bg-[#161513] hover:border-2 border-white border-solid";
    }

    if (styleType === "secondary") {
      return "border-2 border-white border-solid text-nowrap hover:border-transparent hover:text-[#161513] hover:bg-white";
    }
  };

  return (
    <button
      {...props}
      className={`w-40 cursor-pointer py-3 rounded-full ${handleButtonStyle()} duration-100`}
    >
      {children}
    </button>
  );
};

export default Button;
