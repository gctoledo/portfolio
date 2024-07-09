"use client";

import Button from "./Button";
import { useContext } from "react";
import { ModalContext } from "../_context/ModalContext";

const AboutActions = () => {
  const { openModal } = useContext(ModalContext);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/curriculum.pdf";
    link.download = "curriculum.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openContactModal = () => {
    openModal("Content");
  };

  return (
    <>
      <Button onClick={openContactModal}>Contato</Button>

      <Button styleType="secondary" onClick={handleDownload}>
        Download CV
      </Button>
    </>
  );
};

export default AboutActions;
