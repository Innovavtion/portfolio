import styles from "./page.module.scss";
import { RiGithubLine } from "react-icons/ri";

export default function Home() {
  return (
    <div>
      <RiGithubLine className={styles.icons} />
    </div>
  );
}
