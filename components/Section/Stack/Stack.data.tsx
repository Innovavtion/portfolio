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
  nameTool: string;
  icon: React.ReactNode;
}

interface StackProps {
  nameSection: string;
  listSection: Array<Tool>;
}

export const StackData: Array<StackProps> = [
  {
    nameSection: "Development",
    listSection: [
      { nameTool: "HTML5", icon: <SiHtml5 /> },
      { nameTool: "CSS3", icon: <SiCss3 /> },
      { nameTool: "JavaScript", icon: <SiJavascript /> },
      { nameTool: "TypeScript", icon: <SiTypescript /> },
      { nameTool: "React", icon: <SiReact /> },
      { nameTool: "Next", icon: <SiNextdotjs /> },
      { nameTool: "Sass", icon: <IoLogoSass /> },
      { nameTool: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    nameSection: "Apps",
    listSection: [
      { nameTool: "VS Code", icon: <SiVisualstudiocode /> },
      { nameTool: "Figma", icon: <SiFigma /> },
    ],
  },
  {
    nameSection: "Services",
    listSection: [
      { nameTool: "GitHub", icon: <SiGithub /> },
      { nameTool: "Vercel", icon: <SiVercel /> },
    ],
  },
];
