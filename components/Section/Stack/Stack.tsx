import styles from "./Stack.module.scss";
import { Button } from "@/components/Elements/Base/Button/Button";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVisualstudiocode,
  SiFigma,
  SiGithub,
  SiVercel,
} from "react-icons/si";

import { IoLogoSass } from "react-icons/io";

export default function Stack() {
  return (
    <div className={styles.Stack}>
      <div className={styles.Content}>
        <h2>Stack</h2>
        <div className={styles.StackSection}>
          <h4>DEVELOPMENT</h4>
          <div className={styles.Divider} />
          <div className={styles.Info}>
            <Button>
              <SiHtml5 />
              <p>HTML5</p>
            </Button>
            <Button>
              <SiCss3 />
              <p>CSS3</p>
            </Button>
            <Button>
              <SiJavascript />
              <p>JavaScript</p>
            </Button>
            <Button>
              <SiTypescript />
              <p>TypeScript</p>
            </Button>
            <Button>
              <SiReact />
              <p>React</p>
            </Button>
            <Button>
              <SiNextdotjs />
              <p>Next</p>
            </Button>
            <Button>
              <IoLogoSass />
              <p>Sass</p>
            </Button>
            <Button>
              <SiTailwindcss />
              <p>Tailwind</p>
            </Button>
          </div>
        </div>
        <div className={styles.StackSection}>
          <h4>APPS</h4>
          <div className={styles.Divider} />
          <div className={styles.Info}>
            <Button>
              <SiVisualstudiocode />
              <p>VS Code</p>
            </Button>
            <Button>
              <SiFigma />
              <p>Figma</p>
            </Button>
          </div>
        </div>
        <div className={styles.StackSection}>
          <h4>SERVICES</h4>
          <div className={styles.Divider} />
          <div className={styles.Info}>
            <Button>
              <SiGithub />
              <p>GitHub</p>
            </Button>
            <Button>
              <SiVercel />
              <p>Vercel</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
