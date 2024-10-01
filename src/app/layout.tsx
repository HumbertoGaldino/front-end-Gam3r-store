import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Gam3r.store",
  description: "A versão mais básica da loja de jogos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={font.className}>{children}</body>
    </html>
  );
}
