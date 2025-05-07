"use client";

import AboutActions from "../_components/AboutActions";
import Avatar from "../_components/Avatar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="flex flex-col gap-9 items-center justify-center text-center px-2 h-[calc(100vh-95px)] md:h-[calc(100vh-150px)] mt-28 mb-16 md:mt-20 md:mb-0"
      id="about"
    >
      <motion.div
        animate={{ y: [1000, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="opacity-0"
      >
        <Avatar />
      </motion.div>

      <motion.div
        className="w-full opacity-0"
        animate={{ y: [1000, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight select-none">
          Escrevendo{" "}
          <span className="bg-gradient-to-br from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
            códigos
          </span>{" "}
          e<br />
          construindo{" "}
          <span className="bg-gradient-to-tl from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
            soluções
          </span>
          !
        </h1>
      </motion.div>

      <motion.div
        className="w-full lg:w-2/5 opacity-0"
        animate={{ y: [1000, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <h2 className="text-[#C5C5C5] font-light text-sm">
          Apaixonado por tecnologia, construo soluções modernas com{" "}
          <span className="text-javascript">JavaScript</span>,
          <span className="text-typescript"> TypeScript</span> e{" "}
          <span className="text-java">Java</span> — da interface ao backend.
        </h2>
      </motion.div>

      <motion.div
        className="flex gap-4 opacity-0"
        animate={{ y: [1000, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        <AboutActions />
      </motion.div>
    </div>
  );
};

export default About;
