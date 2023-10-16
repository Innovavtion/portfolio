import "./globals.scss";
import type { Metadata } from "next";
import NextThemeProvider from "@/components/providers/theme/NextThemeProvider";
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
        <NextThemeProvider>
          <Navbar />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
