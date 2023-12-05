"use client";

import Footer from "@/components/Footer/Footer";
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
  SiReact, SiAndroid,
  SiPython,
  SiCplusplus,
  SiVercel,
  SiJavascript
} from "react-icons/si";
import SimplePageTitle from "@/components/SimplePageTitle";
import MarqueeButton from "@/components/MarqueeButton";
import { TbBrandFramerMotion, TbBrandOauth } from "react-icons/tb";
import FeaturedProjectItem from "@/components/Projects/FeaturedProjectItem";
import MainContent from "@/components/MainContent";

const Projects = () => {
  const projects = [
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
          <TbBrandFramerMotion />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Snippetopia",
      content:
        "A collection of free React, Next.js, TailwindCSS, and Framer Motion snippets and templates made by me",
      link: "https://snippetopia.xyz",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <TbBrandFramerMotion />
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
      title: "Turbobiz",
      content: "Generate a business idea by leveraging the power of AI",
      link: "https://github.com/csvidit/turbobiz",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <TbBrandFramerMotion />
          <TbBrandOauth />
          <SiFirebase />
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
          <TbBrandFramerMotion />
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
      title: "Bento Bio",
      content:
        "A minimalist bento-style, technical-looking link-in-bio style website made in Next.js",
      link: "https://github.com/csvidit/bento-bio-concept",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <TbBrandFramerMotion />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Bento Portfolio",
      content:
        "A minimalist bento-style, single-page portfolio design made with Next.js, Tailwind, and Framer Motion",
      link: "https://github.com/csvidit/bento-portfolio-concept",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <TbBrandFramerMotion />
          <SiVercel />
        </ProjectIconsContainer>
      ),
    },
    {
      title: "Swiss Bio",
      content:
        "A minimalist link-in-bio style website concept/template, with Framer Motion layout animations.",
      link: "https://github.com/csvidit/bio-swiss",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <TbBrandFramerMotion />
          <SiVercel />
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
      title: "NYT",
      content:
        "A no-nonsense Next.js web app that gets you the top stories from the New York Times wire",
      link: "https://github.com/csvidit/nyt",
      icons: (
        <ProjectIconsContainer>
          <SiTypescript />
          <SiNextdotjs />
          <SiTailwindcss />
          <TbBrandFramerMotion />
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
    <MainContent>
      <SimplePageTitle color="text-violet-500">
        projects
        <div className="flex w-fit mt-4 rounded-[3rem] bg-violet-950 text-violet-500 px-4 py-1 text-xs">
          filtering options coming soon
        </div>
      </SimplePageTitle>
      {/* <GradientBorderBox>Integrated Portfolio</GradientBorderBox> */}
      <FeaturedProjectItem
        title="Turbobiz"
        href="https://github.com/csvidit/turbobiz"
        icons={
          <ProjectIconsContainer>
            <SiTypescript />
            <SiNextdotjs />
            <SiTailwindcss />
            <TbBrandFramerMotion />
            <TbBrandOauth />
            <SiFirebase />
            <SiVercel />
          </ProjectIconsContainer>
        }
      >
        Generate a business idea by leveraging the power of cutting-edge
        generative AI. Turbobiz is based on OpenAI&apos;s GPT-4 LLM with custom
        instructions. Users can view their past searches too, which are stored
        in Firestore, and get redirected to a registrar to buy possible domain
        names for their business.
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
        label="github"
        href="https://github.com/csvidit"
        size={4}
        variant="nonfocus"
        color="violet"
        external={true}
      >
        source code and all other projects
      </MarqueeButton>
      <Footer />
    </MainContent>
  );
};

export default Projects;
