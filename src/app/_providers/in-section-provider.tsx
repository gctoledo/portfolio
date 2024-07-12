"use client";

import { motion } from "framer-motion";

const InSectionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default InSectionProvider;
