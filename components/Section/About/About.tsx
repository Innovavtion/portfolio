import styles from "./About.module.scss";

import Image from "next/image";
import LaptopGif from "@/public/Images/LaptopGif.gif";

export default function About() {
  return (
    <div id="About" className={styles.About}>
      <div className={styles.Container}>
        <h2>About</h2>
        <div className={styles.Content}>
          <div className={styles.AboutText}>
            <p className={styles.MainText}>
              Привет! Я веб разработчик из Томска, Россия. Работаю в основном с
              клиентской частью сайта, но также есть опыт в сфере разработки
              серверной части.
            </p>
            <p className={styles.MainText}>
              Учился в ТТИТ - Томский Техникум Информационных Технологий, на
              разработчика мультимедийных веб приложений.
            </p>
            <p className={styles.MainText}>
              Сейчас активно ищу работу на Junior Frontend Developer / Junior
              Web Developer.
            </p>
          </div>
          <div className={styles.AboutImage}>
            <Image
              src={LaptopGif}
              alt="LaptopGif"
              className={styles.ImageGif}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
