import "./globals.scss";
import type { Metadata } from "next";
import NextThemeProvider from "@/components/Utils/providers/theme/NextThemeProvider";
import Navbar from "@/components/Elements/Navbar/Navbar";
// font setting
import { Roboto } from "next/font/google";
const font = Roboto({ subsets: ["cyrillic"], weight: "500" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio -> Home",
  viewport: {
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    width: "device-width",
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
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
