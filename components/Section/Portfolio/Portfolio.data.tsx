import { StaticImageData } from "next/image";

import KanbanImage from "@/public/Images/Kanban.png";
import WeatherImage from "@/public/Images/Weather.png";
import ToDoImage from "@/public/Images/ToDo.png";

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
  vercel: string;
}

interface StackProps {
  name: string;
  icon: React.ReactNode;
}

interface portfolioProps {
  name: string;
  description: string;
  stack: Array<StackProps>;
  image: StaticImageData;
  link: LinkProps;
}

export const portfolioData: Array<portfolioProps> = [
  {
    name: "Kanban",
    description:
      "Приложение для управления развитием проектов, который помогает наглядно представить объем задач и добиться максимальной эффективности разработки.",
    stack: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Next", icon: <SiNextdotjs /> },
      { name: "Mui", icon: <SiMui /> },
    ],
    image: KanbanImage,
    link: {
      github: "https://github.com/Innovavtion/kanban-board",
      vercel: "https://kanban-board-e2sm.vercel.app/",
    },
  },
  {
    name: "Weather",
    description:
      "Маленькое приложение для просмотра текущей погоды в нескольких городах.",
    image: WeatherImage,
    stack: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    link: {
      github: "https://github.com/Innovavtion/weather-react",
      vercel: "https://weather-react-two-sigma.vercel.app/",
    },
  },
  {
    name: "To-Do",
    description:
      "Классический список задач с расширением базовых возможностей, для большего удобства использования приложения.",
    stack: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Sass", icon: <IoLogoSass /> },
    ],
    image: ToDoImage,
    link: {
      github: "https://github.com/Innovavtion/to-do-react",
      vercel: "https://to-do-react-first-project.vercel.app/",
    },
  },
];
