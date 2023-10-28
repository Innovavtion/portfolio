"use client";

import styles from "./Portfolio.module.scss";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Elements/Base/Button/Button";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import { portfolioData } from "./Portfolio.data";

export default function Portfolio() {
  return (
    <div className={styles.Portfolio}>
      <div className={styles.Container}>
        <h2>Portfolio</h2>
        {portfolioData.map((item, key) => (
          <div className={styles.Content} key={key}>
            <div className={styles.PortfolioImage}>
              <Image src={item.image} alt="Kanban" className={styles.Image} />
            </div>
            <div className={styles.Card}>
              <div className={styles.CardText}>
                <div className={styles.Name}>
                  <h5>{item.name}</h5>
                </div>
                <div className={styles.Description}>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={styles.CardButton}>
                <div className={styles.Stack}>
                  {item.stack.map((itemStack, key) => (
                    <Button key={key}>
                      {itemStack.icon}
                      <p>{itemStack.name}</p>
                    </Button>
                  ))}
                </div>
                <div className={styles.View}>
                  <Link href={item.link.github} target="blank">
                    <Button>
                      <SiGithub />
                    </Button>
                  </Link>
                  <Link href={item.link.vercel} target="blank">
                    <Button>
                      <FiExternalLink />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
