"use client";

import Button from "./Button";

const AboutActions = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/curriculum.pdf";
    link.download = "curriculum.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Button>Contato</Button>

      <Button styleType="secondary" onClick={handleDownload}>
        Download CV
      </Button>
    </>
  );
};

export default AboutActions;
