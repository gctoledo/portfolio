import ModalContextProvider from "../_context/ModalContext";

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
      <ModalContextProvider>{children}</ModalContextProvider>
  );
};

export default RootProviders;
