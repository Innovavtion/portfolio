"use client";

// Custom Theme Provider

import { useState, useEffect, createContext } from "react";

// Types
export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type Props = {
  children: React.ReactNode;
};

// Get theme data local storage
const getTheme = (): Theme => {
  const theme = `${localStorage.getItem("theme") || "light"}`;
  return theme as Theme;
};

// Change html data-theme and update theme data local storage
const changeTheme = (currentTheme: Theme, setTheme: (theme: Theme) => void) => {
  const userMedia = window.matchMedia("(prefers-color-scheme: light)");
  if (userMedia.matches) setTheme(currentTheme);
  document.documentElement.dataset.theme = currentTheme;
  localStorage.setItem("theme", currentTheme);
};

// Create Context
export const ThemeContext = createContext<ThemeContextType | null>(null);

// Theme Provider
export const ThemeProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<Theme>(getTheme);

  useEffect(() => {
    changeTheme(themeMode, setThemeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ theme: themeMode, setTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
