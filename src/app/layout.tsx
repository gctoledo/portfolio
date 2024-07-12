import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ModalContextProvider from "./_context/ModalContext";
import LoaderProvider from "./_providers/loader-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gabriel - Portfolio",
  description: "Portfolio de Gabriel Costa Toledo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <LoaderProvider>
          <ModalContextProvider>{children}</ModalContextProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
