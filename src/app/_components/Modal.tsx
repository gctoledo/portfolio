import { X } from "lucide-react";

interface ModalProps {
  isVisible: boolean;
  content: React.ReactNode;
  title?: string;
  closeModal: () => void;
}

const Modal = ({ content, isVisible, title, closeModal }: ModalProps) => {
  return (
    <div
      className={`${
        isVisible ? "fixed" : "hidden"
      } inset-0 flex items-center justify-center bg-black bg-opacity-90 px-4 z-50`}
    >
      <div className="bg-[#2A2A2A] pb-5 rounded-lg shadow-lg max-w-4xl w-full relative">
        <div className="w-full p-4 flex items-center justify-between rounded-t-lg bg-[#181818]">
          <p className="font-bold text-xl">{title || ""}</p>
          <X className="cursor-pointer" onClick={closeModal} />
        </div>

        <div className="px-4 pt-4">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
