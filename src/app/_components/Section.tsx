"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  sectionId: string;
  className?: string;
}

const Section = ({ children, sectionId, className }: SectionProps) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, margin: "-75px" }}
      className={twMerge("space-y-6", className)}
      id={sectionId}
    >
      {children}
    </motion.div>
  );
};

export default Section;
