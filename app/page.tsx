import styles from "./page.module.scss";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";
import Stack from "@/components/Stack/Stack";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <Stack />
    </>
  );
}
