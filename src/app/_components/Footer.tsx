import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-16 bg-[#222222]">
      <div className="w-full h-full px-4 container mx-auto flex items-center justify-between">
        <div>
          <p className="text-sm">© 2024 | Gabriel Costa Toledo</p>
        </div>

        <div className="flex gap-2 md:gap-6">
          <Link
            href={"https://github.com/gctoledo"}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 duration-150"
          >
            <Github size={20} />
          </Link>

          <Link
            href={"https://linkedin.com/in/gctoledo"}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 duration-150"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
