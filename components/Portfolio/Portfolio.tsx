import styles from "./Portfolio.module.scss";

import Image from "next/image";
import KanbanImage from "@/public/Images/Kanban.png";

import { Button } from "@/components/Base/Button/Button";

import { SiTypescript, SiNextdotjs, SiGithub, SiMui } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export default function Portfolio() {
  return (
    <div className={styles.Portfolio}>
      <div className={styles.Container}>
        <h2>Portfolio</h2>
        <div className={styles.Content}>
          <div className={styles.PortfolioText}>
            <div className={styles.NameProjects}>
              <h5>Kanban</h5>
            </div>
            <div className={styles.Description}>
              <p>
                Задача организации, в особенности же рамки и место обучения
                кадров обеспечивает широкому кругу (специалистов) участие в
                формировании дальнейших направлений развития. Таким образом
                дальнейшее развитие различных форм деятельности представляет
                собой интересный эксперимент проверки систем массового участия.
              </p>
            </div>
            <div className={styles.Stack}>
              <Button>
                <SiTypescript />
                <p>TypeScript</p>
              </Button>
              <Button>
                <SiNextdotjs />
                <p>Next</p>
              </Button>
              <Button>
                <SiMui />
                <p>MUI</p>
              </Button>
            </div>
            <div className={styles.View}>
              <Button>
                <SiGithub />
              </Button>
              <Button>
                <FiExternalLink />
              </Button>
            </div>
          </div>
          <div className={styles.PortfolioImage}>
            <Image src={KanbanImage} alt="Kanban" className={styles.Image} />
          </div>
        </div>
      </div>
    </div>
  );
}
