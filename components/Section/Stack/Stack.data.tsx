import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVisualstudiocode,
  SiFigma,
  SiGithub,
  SiVercel,
} from "react-icons/si";

import { IoLogoSass } from "react-icons/io";

interface Tool {
  text: string;
  icon: React.ReactNode;
}

interface Stack {
  text: string;
  tools: Array<Tool>;
}

export const StackData: Array<Stack> = [
  {
    text: "Development",
    tools: [
      { text: "HTML5", icon: <SiHtml5 /> },
      { text: "CSS3", icon: <SiCss3 /> },
      { text: "JavaScript", icon: <SiJavascript /> },
      { text: "TypeScript", icon: <SiTypescript /> },
      { text: "React", icon: <SiReact /> },
      { text: "Next", icon: <SiNextdotjs /> },
      { text: "Sass", icon: <IoLogoSass /> },
      { text: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    text: "Apps",
    tools: [
      { text: "VS Code", icon: <SiVisualstudiocode /> },
      { text: "Figma", icon: <SiFigma /> },
    ],
  },
  {
    text: "Services",
    tools: [
      { text: "GitHub", icon: <SiGithub /> },
      { text: "Vercel", icon: <SiVercel /> },
    ],
  },
];
