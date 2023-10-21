import styles from "./About.module.scss";
import { PiFinnTheHumanThin } from "react-icons/pi";

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.Container}>
        <h2>About</h2>
        <div className={styles.Content}>
          <p>
            I am a web developer from Tomsk, Russia. Studied at TTIT - Tomsk
            Technical College of Information Technologies as a developer of
            multimedia web applications. I am currently looking for a job as a
            Junior web developer.
          </p>
          <PiFinnTheHumanThin className={styles.MandalorinSvg} />
        </div>
      </div>
    </div>
  );
}
