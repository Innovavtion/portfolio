"use client";

import styles from "./Navbar.module.scss";

import ButtonNavbar from "./Button/ButtonNavbar";
import { RiMoonLine, RiSunLine, RiHome5Line } from "react-icons/ri";

import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<boolean>(false);

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
          <ButtonNavbar onClick={() => setTheme(!theme)}>
            {theme != true ? <RiSunLine /> : <RiMoonLine />}
          </ButtonNavbar>
        </div>
      </div>
    </div>
  );
}
