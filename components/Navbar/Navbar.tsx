"use client";

import styles from "./Navbar.module.scss";
import { RiMoonLine, RiSunLine, RiHome5Line } from "react-icons/ri";

import ButtonNavbar from "./Button/ButtonNavbar";
import useNavbar from "./useNavbar";

// Animation
import { motion, useTransform, useScroll } from "framer-motion";

export default function Navbar() {
  const { theme, updateTheme } = useNavbar();

  // Animation for Navbar - Используем в motion.div

  // Текущие значение в пикселях
  const { scrollY } = useScroll();

  // Диапозон работы анимации в пикселях
  const offsetY = [0, 35];

  // Стили для длины и тени - Navbar
  const widthNavbar = [1024, 1055];
  const boxShadow = ["none", "0px 7px 25px rgba(0, 0, 0, 0.7)"];

  // Хук трансформ возвращает текущие значение и прокидываем в компонент motion.div, в тег style для анимации
  const width = useTransform(scrollY, offsetY, widthNavbar);
  const shadow = useTransform(scrollY, offsetY, boxShadow);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.navbar}
        style={{ maxWidth: width, boxShadow: shadow }}
      >
        <div className={styles.navbarLeft}>
          <ButtonNavbar>
            <RiHome5Line className={styles.logo} />
          </ButtonNavbar>
        </div>
        <div className={styles.navbarCenter}>
          <a>About</a>
          <a>Portfolio</a>
          <a>Stack</a>
        </div>
        <div className={styles.navbarRight}>
          <ButtonNavbar onClick={() => updateTheme()}>
            {theme === "dark" ? <RiMoonLine /> : <RiSunLine />}
          </ButtonNavbar>
        </div>
      </motion.div>
    </div>
  );
}
