import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import RootProviders from "./_providers/root-providers";

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
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
