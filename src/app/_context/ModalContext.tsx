"use client";

import React, { createContext, useState } from "react";
import Modal from "../_components/Modal";

interface ModalContextProviderProps {
  children: React.ReactNode;
}

interface ModalContextProps {
  openModal: (content: React.ReactNode, title?: string) => void;
}

export const ModalContext = createContext({} as ModalContextProps);

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<React.ReactNode>();
  const [isVisible, setIsVisible] = useState(false);

  const openModal = (content: React.ReactNode, title?: string) => {
    if (title) {
      setTitle(title);
    }
    setContent(content);
    setIsVisible(true);
  };

  const closeModal = () => {
    setTitle("");
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      <Modal
        closeModal={closeModal}
        content={content}
        isVisible={isVisible}
        title={title}
      />

      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
