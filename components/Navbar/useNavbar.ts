import { useTheme } from "next-themes";

export default function useNavbar() {
  const { theme, setTheme } = useTheme();

  const updateTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, updateTheme };
}
