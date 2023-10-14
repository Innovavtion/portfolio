import "./globals.scss";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";

// font setting
import { Golos_Text } from "next/font/google";
const font = Golos_Text({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio -> Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
