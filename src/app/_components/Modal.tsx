import { X } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ModalProps {
  isVisible: boolean;
  content: React.ReactNode;
  title?: string;
  closeModal: () => void;
}

const variants: Variants = {
  closed: { opacity: 0, y: "-100%" },
  open: { opacity: 1, y: 0 },
};

const Modal = ({ content, isVisible, title, closeModal }: ModalProps) => {
  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } fixed top-0 left-0 w-full h-screen items-center justify-center bg-black bg-opacity-90 p-4 z-50 flex-wrap overflow-y-scroll`}
    >
      <motion.div
        animate={isVisible ? "open" : "closed"}
        variants={variants}
        className="relative bg-[#2A2A2A] pb-5 rounded-lg shadow-lg max-w-4xl mx-auto w-full"
      >
        <div className="w-full p-4 flex items-center justify-between rounded-t-lg bg-[#181818]">
          <h2 className="font-bold text-xl">{title || ""}</h2>
          <X className="cursor-pointer" onClick={closeModal} />
        </div>

        <div className="px-4 pt-4">{content}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
