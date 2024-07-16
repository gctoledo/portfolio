"use client";

import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  sectionId: string;
}

const Section = ({ children, sectionId }: SectionProps) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      className="space-y-6"
      id={sectionId}
    >
      {children}
    </motion.div>
  );
};

export default Section;
