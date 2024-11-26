import { StaticImageData } from "next/image";

import WeatherImage from "@/public/Images/Weather.png";
import ToDoImage from "@/public/Images/ToDo.png";
import ChatImage from "@/public/Images/Chat.png";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
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
  image: StaticImageData | undefined;
  link: LinkProps;
}

export const PortfolioData: Array<portfolioProps> = [
  {
    text: "Chat",
    description:
      "Fullstack проект, который позволяет переписываться двум людям в режиме реального времени.",
    stack: [
      { text: "TypeScript", icon: <SiTypescript /> },
      { text: "React", icon: <SiReact /> },
      { text: "Nest", icon: <SiNestjs /> },
    ],
    image: ChatImage,
    link: {
      github: "https://github.com/Innovavtion/chat-fullstack",
      vercel: undefined,
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
];
