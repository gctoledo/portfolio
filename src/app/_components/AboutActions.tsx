"use client";

import Button from "./Button";
import { useContext } from "react";
import { ModalContext } from "../_context/ModalContext";
import AboutMe from "./AboutMe";

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
    openModal(<AboutMe />, "Sobre mim");
  };

  return (
    <>
      <Button onClick={openContactModal}>Sociais</Button>

      <Button styleType="secondary" onClick={handleDownload}>
        Download CV
      </Button>
    </>
  );
};

export default AboutActions;
