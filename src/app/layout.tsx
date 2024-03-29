import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import ModeContextProvider from "./contextApi/ModeContextProvider";
// Josefin Sans
import "./globals.css";

const usedFont = Josefin_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={usedFont.className}>
        <ModeContextProvider>{children}</ModeContextProvider>
      </body>
    </html>
  );
}
