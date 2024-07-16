import Loader from "../_components/Loader";
import ModalContextProvider from "../_context/ModalContext";

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Loader>
      <ModalContextProvider>{children}</ModalContextProvider>
    </Loader>
  );
};

export default RootProviders;
