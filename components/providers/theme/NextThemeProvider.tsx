"use client";

import { useState, useEffect } from "react";

import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function NextThemeProvider({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider enableSystem={false}>{children}</ThemeProvider>;
}
