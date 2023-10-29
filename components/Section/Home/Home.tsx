"use client";

import { Button } from "@/components/Elements/Base/Button/Button";
import styles from "./Home.module.scss";
import ReactTyped from "react-typed";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiTelegram,
  SiGmail,
} from "react-icons/si";
import { IoLogoSass, IoIosMore } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import LaptopSvg from "@/public/Images/Laptop.svg";

export default function Home() {
  return (
    <div id="Home" className={styles.Home}>
      <div className={styles.Container}>
        <div className={styles.ContainerLaptop}>
          <div className={styles.LaptopContent}>
            <div className={styles.Content}>
              <p className={styles.TextFIO}>Никита Пожидаев</p>
              <p className={styles.TextTypes} translate="no">
                <ReactTyped
                  strings={["Frontend Developer", "Web Developer"]}
                  typeSpeed={150}
                  loop
                  backSpeed={35}
                  cursorChar="❚"
                  showCursor={true}
                />
              </p>
              <div className={styles.Stack}>
                <Button>
                  <SiTypescript className={styles.TypeScript} />
                </Button>
                <Button>
                  <SiReact className={styles.React} />
                </Button>
                <Button>
                  <IoLogoSass className={styles.Sass} />
                </Button>
                <Button>
                  <SiTailwindcss className={styles.Tailwind} />
                </Button>
                <a href="#Stack">
                  <Button>
                    <IoIosMore />
                  </Button>
                </a>
              </div>
              <div className={styles.Contact}>
                <a href="mailto:pozhidaevw@gmail.com" target="_blank">
                  <Button>
                    <SiGmail className={styles.GMail} />
                  </Button>
                </a>
                <a href="https://github.com/Innovavtion" target="_blank">
                  <Button>
                    <SiGithub className={styles.GitHub} />
                  </Button>
                </a>
                <a href="https://t.me/nikitafiksik" target="_blank">
                  <Button>
                    <SiTelegram className={styles.Telegram} />
                  </Button>
                </a>
              </div>
              <div className={styles.DownloadResume}>
                <a
                  href="https://docs.google.com/document/d/17JWNch7-wGpqAlf2opzJ8BYCJfywrtl80mreKnpjxOU/edit?usp=drive_link"
                  target="_blank"
                >
                  <Button>
                    <FiDownload className={styles.DownloadIcon} />
                    <p>Резюме</p>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <Image src={LaptopSvg} alt="Laptop" className={styles.Laptop} />
        </div>
      </div>
    </div>
  );
}