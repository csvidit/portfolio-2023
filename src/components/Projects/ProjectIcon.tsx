import React from "react";
import { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiAmazonec2,
  SiAmazondynamodb,
  SiAmazonrds,
  SiAmazons3,
  SiAndroid,
  SiAndroidstudio,
  SiApollographql,
  SiAstro,
  SiAuth0,
  SiAwsamplify,
  SiAwslambda,
  SiAxios,
  SiBootstrap,
  SiCss3,
  SiCplusplus,
  SiExpress,
  SiFramer,
  SiFirebase,
  SiGooglecloud,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMicrosoftazure,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRemix,
  SiSqlite,
  SiStripe,
  SiSupabase,
  SiSwift,
  SiTableau,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface ProjectIconProps {
  type: string;
}

const iconMap: Record<string, IconType> = {
  amazonaws: SiAmazonaws,
  amazonec2: SiAmazonec2,
  amazondynamodb: SiAmazondynamodb,
  amazonrds: SiAmazonrds,
  amazons3: SiAmazons3,
  android: SiAndroid,
  androidstudio: SiAndroidstudio,
  apollographql: SiApollographql,
  astro: SiAstro,
  auth0: SiAuth0,
  awsamplify: SiAwsamplify,
  awslambda: SiAwslambda,
  axios: SiAxios,
  bootstrap: SiBootstrap,
  css3: SiCss3,
  cplusplus: SiCplusplus,
  express: SiExpress,
  framer: SiFramer,
  firebase: SiFirebase,
  googlecloud: SiGooglecloud,
  greensock: SiGreensock,
  html5: SiHtml5,
  javascript: SiJavascript,
  java: FaJava,
  mongodb: SiMongodb,
  microsoftazure: SiMicrosoftazure,
  mysql: SiMysql,
  nextdotjs: SiNextdotjs,
  postgresql: SiPostgresql,
  python: SiPython,
  pytorch: SiPytorch,
  react: SiReact,
  remix: SiRemix,
  sqlite: SiSqlite,
  stripe: SiStripe,
  supabase: SiSupabase,
  swift: SiSwift,
  tableau: SiTableau,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  vercel: SiVercel,
  visualstudiocode: SiVisualstudiocode,
};

const ProjectIcon = (props: { name: string }) => {
  const IconComponent = iconMap[props.name.toLowerCase()];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
};

export default ProjectIcon;
