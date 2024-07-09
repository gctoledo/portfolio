import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-16 bg-[#222222]">
      <div className="w-full h-full container mx-auto flex items-center justify-between">
        <div>
          <p>© 2024 | Gabriel Costa Toledo</p>
          <p></p>
        </div>

        <div className="flex gap-6">
          <Link
            href={"https://github.com/gctoledo"}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 duration-150"
          >
            <Github />
          </Link>

          <Link
            href={"https://linkedin.com/in/gctoledo"}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 duration-150"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
