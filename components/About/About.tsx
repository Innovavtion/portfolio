"use client";

import { Button } from "../Base/Button/Button";
import styles from "./About.module.scss";
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
import Image from "next/image";
import LaptopSvg from "@/public/Images/Laptop.svg";

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.Container}>
        <div className={styles.ContainerLaptop}>
          <div className={styles.LaptopContent}>
            <div className={styles.Content}>
              <p className={styles.TextFIO}>Nikita Pozhidaev</p>
              <p className={styles.TextTypes}>
                <ReactTyped
                  strings={["Web Developer", "React Developer"]}
                  typeSpeed={150}
                  loop
                  backSpeed={35}
                  cursorChar="❚ "
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
                <Button>
                  <IoIosMore />
                </Button>
              </div>
              <div className={styles.Contact}>
                <Button>
                  <SiGmail className={styles.GMail} />
                </Button>
                <Button>
                  <SiGithub className={styles.GitHub} />
                </Button>
                <Button>
                  <SiTelegram className={styles.Telegram} />
                </Button>
              </div>
              <div className={styles.DownloadResume}>
                <Button>Download Resume</Button>
              </div>
            </div>
          </div>
          <Image src={LaptopSvg} alt="Laptop" className={styles.Laptop} />
        </div>
      </div>
    </div>
  );
}
