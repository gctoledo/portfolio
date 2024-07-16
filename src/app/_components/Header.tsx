"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Nav from "./Nav";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };
  return (
    <>
      {" "}
      <motion.header
        animate={{ top: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="opacity-0 w-full h-16 bg-gradient-to-b from-[#222222] to-[#1a1a1a] fixed top-0 left-0 shadow-md shadow-black/20 z-40"
      >
        <div className="container w-full mx-auto md:flex justify-between items-center">
          <button
            className="w-full h-16 pr-3 flex items-center justify-end cursor-pointer md:hidden"
            onClick={handleMobileMenu}
          >
            <Menu />
          </button>

          <h1 className="hidden md:block bg-gradient-to-tl from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent font-bold text-lg">
            {"<gabriel.dev />"}
          </h1>

          <Nav />
        </div>
        {mobileMenuIsOpen && <MobileNav close={handleMobileMenu} />}
      </motion.header>
    </>
  );
};

export default Header;
