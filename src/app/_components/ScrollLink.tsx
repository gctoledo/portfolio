// components/SmoothScrollLink.tsx
import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ScrollLinkProps {
  href: string;
  offset?: number;
  children: React.ReactNode;
  classname?: string;
}

const ScrollLink = ({
  href,
  offset = 0,
  children,
  classname,
}: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link
      className={twMerge(
        `flex h-full w-36 lg:w-48 md:hover:bg-black hover:bg-opacity-10`,
        classname || ""
      )}
      href={href}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
