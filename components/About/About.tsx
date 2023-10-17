"use client";

import { Button } from "../Base/Button/Button";
import styles from "./About.module.scss";
import ReactTyped from "react-typed";
import { SiTypescript, SiReact, SiTailwindcss } from "react-icons/si";
import { IoLogoSass, IoIosMore } from "react-icons/io";

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.container}>
        <p className={styles.textFIO}>Nikita Pozhidaev</p>
        <p className={styles.textTypes}>
          <ReactTyped
            strings={["Web Developer", "React Developer"]}
            typeSpeed={150}
            loop
            backSpeed={35}
            cursorChar="❚"
            showCursor={true}
          />
        </p>
        <div className={styles.stack}>
          <Button>
            <SiTypescript class={styles.TypeScript} />
          </Button>
          <Button>
            <SiReact class={styles.React} />
          </Button>
          <Button>
            <IoLogoSass class={styles.Sass} />
          </Button>
          <Button>
            <SiTailwindcss class={styles.Tailwind} />
          </Button>
          <Button>
            <IoIosMore />
          </Button>
        </div>
        {/*
        <div className={styles.Contact}>
          <Button>Download Resume</Button>
          <Button>Download Resume</Button>
        </div>
        */}
      </div>
    </div>
  );
}
