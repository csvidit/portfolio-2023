"use client";

import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import ProjectIconsContainer from "@/components/Projects/ProjectIconsContainer";
import ProjectItem from "@/components/Projects/ProjectItem";
import { FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiSupabase,
  SiAuth0,
  SiExpress,
  SiHtml5,
  SiPostgresql,
  SiBootstrap,
  SiGraphql,
  SiReact,
  SiFramer,
  SiAndroid,
  SiPython,
  SiCplusplus,
  SiVercel,
  SiJavascript,
} from "react-icons/si";
import SimplePageTitle from "@/components/SimplePageTitle";
import MainGridItem from "@/components/MainGridItem";
import { motion } from "framer-motion";
import FeaturedProjectItem from "@/components/Projects/FeaturedProjectItem";
import MarqueeButton from "@/components/MarqueeButton";

const Projects = () => {
  const projects = [
    {
      title: "Turbobiz",
      content: "Generate a business idea by leveraging the power of AI",
      link: "https://github.com/csvidit/turbobiz",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <SiFirebase />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Xzayvian GPT",
      content:
        "A chatbot based on OpenAI's GPT 3.5 LLM and made from scratch in Next.js. Supports different user profiles using Auth0 and user search histories through Cloud Firestore",
      link: "https://github.com/csvidit/xz-gpt",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <SiFirebase />
          <SiAuth0 />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Squawk Social",
      content:
        "A fun and unserious social media platform targeted at Gen Z. Created using Next.js, Auth0, and Supabase PostgreSQL.",
      link: "https://github.com/csvidit/squawk",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <SiSupabase />
          <SiAuth0 />
          <SiFramer />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Snapshot",
      content:
        "A web app that shows you a briefing of the day, including news and weather",
      link: "https://github.com/csvidit/snapshot",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <SiAuth0 />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Lit. Portfolio",
      content:
        "A beautiful literature portfolio design made using Tailwind and Framer Motion",
      link: "https://github.com/csvidit/next-lit-portfolio",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <SiFramer />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Blog MVP",
      content: "A simple blog concept",
      link: "https://github.com/csvidit/blog-mvp",
      icons: (
        <ProjectIconsContainer>
          <SiJavascript />
          <SiHtml5 />
          <SiBootstrap />
          <SiExpress />
          <SiPostgresql />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Bio v2",
      content:
        "A link-in-bio style website made in React, which fetches links from Hygraph CMS",
      link: "https://github.com/csvidit/react-bio-v2",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiReact />
          <SiGraphql />
          <SiTailwindcss />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Bio v3",
      content:
        "A minimalist link-in-bio style website concept/template, with Framer Motion layout animations.",
      link: "https://github.com/csvidit/react-bio-v2",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <SiFramer />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "NYT",
      content:
        "A no-nonsense Next.js web app that gets you the top stories from the New York Times wire",
      link: "https://github.com/csvidit/nyt",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <SiFramer />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Bucket Tracker",
      content:
        "An Android app to track score and times for basketball matches, made in Android Studio. This is an MVP, so it only stores the data in memory, not storage",
      link: "https://github.com/csvidit/BucketTracker",
      icons: (
        <ProjectIconsContainer>
          <FaJava />
          <SiAndroid />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Deep NN",
      content: "A deep neural network classifier, made in Python",
      link: "https://github.com/csvidit/deep-neural-network",
      icons: (
        <ProjectIconsContainer>
          <SiPython />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "GraphicsLib",
      content: "A graphics library created from scratch, similar to OpenGL.",
      link: "https://github.com/csvidit/GraphicsLib",
      icons: (
        <ProjectIconsContainer>
          <SiCplusplus />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Tree Sorted Stack",
      content:
        "An abstract data structure similar to a binary stree. Represented as an array where every node must be smaller than its children.",
      link: "https://github.com/csvidit/TreeSortedStack",
      icons: (
        <ProjectIconsContainer>
          <SiCplusplus />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Venerable Manor",
      content: "A console-based adventure game",
      link: "https://github.com/csvidit/VenerableManor",
      icons: (
        <ProjectIconsContainer>
          <FaJava />
        </ProjectIconsContainer>
      ),
    },
  ];

  return (
    <MainContainer>
      <Nav />
      <IndexContent>
        <SimplePageTitle color="text-violet-500">
          projects
          <div className="flex w-fit mt-4 rounded-[3rem] bg-violet-950 text-violet-500 px-4 py-1 text-xs">
            filtering options coming soon
          </div>
        </SimplePageTitle>
        {/* <GradientBorderBox>Integrated Portfolio</GradientBorderBox> */}
        <FeaturedProjectItem
          title="Portfolio 2023"
          href="https://github.com/csvidit/portfolio-2023"
          icons={
            <ProjectIconsContainer>
              <SiTypescript />
              <SiNextdotjs />
              <SiTailwindcss />
              <SiFramer />
              <SiVercel />
              <SiGraphql />
            </ProjectIconsContainer>
          }
        >
          My new portfolio for 2023, employing some of the latest web design
          trends such as bento grids, rounded corners, and glassmorphism. Built
          from the ground up with inspiration here and there from award-winning
          design portfolios.
        </FeaturedProjectItem>
        {projects.map((x, index: number) => {
          return (
            <ProjectItem
              key={index}
              title={x.title}
              href={x.link}
              icons={x.icons}
            >
              {x.content}
            </ProjectItem>
          );
        })}
        <MarqueeButton
          href="https://github.com/csvidit"
          size={4}
          variant="nonfocus"
          color="violet"
          external={true}
        >
          github
        </MarqueeButton>
        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default Projects;
