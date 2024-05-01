import { StaticImageData } from "next/image";

import KanbanImage from "@/public/Images/Kanban.png";
import WeatherImage from "@/public/Images/Weather.png";
import ToDoImage from "@/public/Images/ToDo.png";
import PortfolioImage from "@/public/Images/Portfolio.png";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";

import { IoLogoSass } from "react-icons/io";

interface LinkProps {
  github: string;
  vercel?: string;
}

interface StackProps {
  text: string;
  icon: React.ReactNode;
}

interface portfolioProps {
  text: string;
  description: string;
  stack: Array<StackProps>;
  image: StaticImageData;
  link: LinkProps;
}

export const PortfolioData: Array<portfolioProps> = [
  {
    text: "Portfolio",
    description:
      "Одностраничное приложение, описывающие проффесиональные навыки и умения разработчика.",
    stack: [
      { text: "TypeScript", icon: <SiTypescript /> },
      { text: "Next", icon: <SiNextdotjs /> },
      { text: "Sass", icon: <IoLogoSass /> },
    ],
    image: PortfolioImage,
    link: {
      github: "https://github.com/Innovavtion/portfolio",
      vercel: "https://npminimalism.vercel.app/",
    },
  },
  {
    text: "Weather",
    description:
      "Маленькое приложение для просмотра текущей погоды в нескольких городах.",
    image: WeatherImage,
    stack: [
      { text: "TypeScript", icon: <SiTypescript /> },
      { text: "React", icon: <SiReact /> },
      { text: "Tailwind", icon: <SiTailwindcss /> },
    ],
    link: {
      github: "https://github.com/Innovavtion/weather-react",
      vercel: "https://weather-react-simple.vercel.app",
    },
  },
  {
    text: "To-Do",
    description:
      "Классический список задач с расширением базовых возможностей, для большего удобства использования приложения.",
    stack: [
      { text: "JavaScript", icon: <SiJavascript /> },
      { text: "React", icon: <SiReact /> },
      { text: "Sass", icon: <IoLogoSass /> },
    ],
    image: ToDoImage,
    link: {
      github: "https://github.com/Innovavtion/to-do-react",
      vercel: "https://to-do-react-project.vercel.app",
    },
  },
  /*
  {
    text: "Kanban",
    description:
      "Приложение для управления развитием проектов, который помогает наглядно представить объем задач и добиться максимальной эффективности разработки.",
    stack: [
      { text: "TypeScript", icon: <SiTypescript /> },
      { text: "Next", icon: <SiNextdotjs /> },
      { text: "Mui", icon: <SiMui /> },
    ],
    image: KanbanImage,
    link: {
      github: "https://github.com/Innovavtion/kanban-board",
      vercel: undefined,
    },
  },
  */
];
