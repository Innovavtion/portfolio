"use client";

import styles from "./Portfolio.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from "@/components/Elements/Base/Button/Button";
import Slider from "react-slick";

import Image from "next/image";
import Link from "next/link";

import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import { PortfolioData } from "./Portfolio.data";

const settingsSlider = {
  dots: true,
  infinite: true,
  fade: true,
  speed: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  waitForAnimate: false,
  dotsClass: "slick-dots slick-custom",
  arrows: false,
  customPaging: (i: number) => <div className={styles.Pagination}></div>,
};

export default function Portfolio() {
  return (
    <div id="Portfolio" className={styles.Portfolio}>
      <div className={styles.Container}>
        <h2>Portfolio</h2>
        <Slider {...settingsSlider} className={styles.Slider}>
          {PortfolioData.map((item, key) => (
            <div key={key} className={styles.ContentContainer}>
              <div className={styles.Content}>
                <div className={styles.PortfolioImage}>
                  <Image
                    src={item.image}
                    alt="Kanban"
                    className={styles.Image}
                  />
                </div>
                <div className={styles.Card}>
                  <div className={styles.CardText}>
                    <div className={styles.Name}>
                      <h5>{item.text}</h5>
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
                          <p>{itemStack.text}</p>
                        </Button>
                      ))}
                    </div>
                    <div className={styles.View}>
                      {item.link != null}
                      <Link href={item.link.github} target="blank">
                        <Button>
                          <SiGithub />
                        </Button>
                      </Link>
                      {item.link.vercel != undefined && (
                        <Link href={item.link.vercel} target="blank">
                          <Button>
                            <FiExternalLink />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
