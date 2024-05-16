import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiWebpack,
  SiVite,
  SiTurborepo,
  SiEslint,
  SiPrettier,
  SiStylelint,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiMysql,
  SiPrisma,
  SiGraphql,
  SiJest,
  SiStorybook,
  SiTestinglibrary,
  SiPostman,
  SiFigma,
  SiVercel,
  SiSwagger,
  SiRadixui,
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
    text: "Client Development",
    tools: [
      { text: "JavaScript", icon: <SiJavascript /> },
      { text: "TypeScript", icon: <SiTypescript /> },
      { text: "React", icon: <SiReact /> },
      { text: "Next", icon: <SiNextdotjs /> },
      { text: "Redux (Toolkit)", icon: <SiRedux /> },
      { text: "Graphql", icon: <SiGraphql /> },
      { text: "Webpack", icon: <SiWebpack /> },
      { text: "Vite", icon: <SiVite /> },
      { text: "Sass", icon: <IoLogoSass /> },
      { text: "Tailwind", icon: <SiTailwindcss /> },
      { text: "Material UI", icon: <SiMui /> },
      { text: "Radix UI", icon: <SiRadixui /> },
    ],
  },
  {
    text: "Server Development",
    tools: [
      { text: "Nest", icon: <SiNestjs /> },
      { text: "Prisma", icon: <SiPrisma /> },
      { text: "Postgres", icon: <SiPostgresql /> },
      { text: "Swagger", icon: <SiSwagger /> },
    ],
  },
  {
    text: "Environment",
    tools: [
      { text: "Turbo", icon: <SiTurborepo /> },
      { text: "Eslint", icon: <SiEslint /> },
      { text: "Prettier", icon: <SiPrettier /> },
      { text: "Stylelint", icon: <SiStylelint /> },
    ],
  },
];
