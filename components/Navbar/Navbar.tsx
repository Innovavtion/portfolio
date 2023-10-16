"use client";

import styles from "./Navbar.module.scss";

import { useContext } from "react";

import {
  ThemeContext,
  ThemeContextType,
} from "@/components/providers/theme/ThemeProvider";

import ButtonNavbar from "./Button/ButtonNavbar";
import { RiMoonLine, RiSunLine, RiHome5Line } from "react-icons/ri";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  const updateTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <ButtonNavbar>
            <RiHome5Line className={styles.logo} />
          </ButtonNavbar>
        </div>
        <div className={styles.navbarRight}>
          <a>About</a>
          <a>Project</a>
          <a>Contact</a>
          <ButtonNavbar onClick={() => updateTheme()}>
            {theme === "light" ? <RiSunLine /> : <RiMoonLine />}
          </ButtonNavbar>
        </div>
      </div>
    </div>
  );
}
