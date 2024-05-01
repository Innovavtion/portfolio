import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiWebpack,
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
      { text: "Redux (Toolkit)", icon: <SiRedux /> },
      { text: "Next", icon: <SiNextdotjs /> },
      { text: "Sass", icon: <IoLogoSass /> },
      { text: "Tailwind", icon: <SiTailwindcss /> },
      { text: "Mui", icon: <SiMui /> },
    ],
  },
  {
    text: "Server Development",
    tools: [
      { text: "Nest", icon: <SiNestjs /> },
      { text: "Prisma", icon: <SiPrisma /> },
      { text: "Graphql", icon: <SiGraphql /> },
      { text: "Postgres", icon: <SiPostgresql /> },
    ],
  },
  {
    text: "Environment",
    tools: [
      { text: "Webpack", icon: <SiWebpack /> },
      { text: "Turbo", icon: <SiTurborepo /> },
      { text: "Eslint", icon: <SiEslint /> },
      { text: "Prettier", icon: <SiPrettier /> },
      // { text: "Stylelint", icon: <SiStylelint /> },
    ],
  },
];

/*
{
  text: "Testing",
  tools: [
    { text: "Jest", icon: <SiJest /> },
    { text: "Testing Library", icon: <SiTestinglibrary /> },
    { text: "Storybook", icon: <SiStorybook /> },
    { text: "Postman", icon: <SiPostman /> },
  ],
},
{
  text: "Other",
  tools: [
    { text: "Figma", icon: <SiFigma /> },
    { text: "Vercel", icon: <SiVercel /> },
  ],
},

*/
