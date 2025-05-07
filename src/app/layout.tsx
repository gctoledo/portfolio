import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import RootProviders from "./_providers/root-providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gabriel Toledo | Desenvolvedor Full Stack",
  description:
    "Portfólio de Gabriel Costa Toledo, desenvolvedor full stack com experiência em React, Next.js, Node.js, Java Spring e projetos Dockerizados.",
  keywords: [
    "Gabriel Toledo",
    "Portfólio",
    "Desenvolvedor Web",
    "Next.js",
    "React",
    "JavaScript",
    "Node.js",
    "Spring Boot",
    "Desenvolvedor Full Stack",
    "Frontend",
    "Backend",
  ],
  authors: [
    {
      name: "Gabriel Costa Toledo",
      url: "https://gabrieltoledo.dev",
    },
  ],
  creator: "Gabriel Costa Toledo",
  openGraph: {
    title: "Gabriel Toledo | Desenvolvedor Full Stack",
    description:
      "Confira o portfólio de Gabriel Toledo, especialista em aplicações web modernas com foco em performance, arquitetura e qualidade de código.",
    url: "https://gabrieltoledo.dev",
    siteName: "Gabriel Toledo Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://gabrieltoledo.dev",
  },
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
