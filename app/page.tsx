import styles from "./page.module.scss";
import Home from "@/components/Section/Home/Home";
import About from "@/components/Section/About/About";
import Portfolio from "@/components/Section/Portfolio/Portfolio";
import Stack from "@/components/Section/Stack/Stack";

export default function Page() {
  return (
    <div className={styles.Content}>
      <Home />
      <About />
      <Portfolio />
      <Stack />
    </div>
  );
}
