"use client";

import styles from "./Navbar.module.scss";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import ButtonNavbar from "./Button/ButtonNavbar";
import { RiMoonLine, RiSunLine, RiHome5Line } from "react-icons/ri";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const updateTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <ButtonNavbar>
            <RiHome5Line className={styles.logo} />
          </ButtonNavbar>
        </div>
        <div className={styles.navbarCenter}>
          <a>About</a>
          <a>Project</a>
          <a>Stack</a>
        </div>
        <div className={styles.navbarRight}>
          <ButtonNavbar onClick={() => updateTheme()}>
            {theme === "dark" ? <RiMoonLine /> : <RiSunLine />}
          </ButtonNavbar>
        </div>
      </div>
    </div>
  );
}
