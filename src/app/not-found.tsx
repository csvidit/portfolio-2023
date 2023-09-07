"use client";

import Footer from "@/components/Footer/Footer";
import ActionButton from "@/components/Index/ActionButton";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import MainGridItem from "@/components/MainGridItem";
import Nav from "@/components/Nav/Nav";
import SecondaryButton from "@/components/SecondaryButton";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <MainContainer>
      <Nav notFound />
      <IndexContent>
        <div
          className={`col-span-1 lg:col-span-4 lg:row-span-1 h-fit flex flex-col space-y-8 items-center rounded-[3rem] p-8 lg:p-12 bg-neutral-900`}
        >
          <div className="text-4xl lg:text-6xl text-indigo-500">Error 404</div>
          <div className="text-xl lg:text-2xl">
            You were trying to explore uncharted space.
          </div>
          <ActionButton size="fit" external={false} variant="plain" href="/">
            Go to homepage
          </ActionButton>
        </div>

        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default NotFound;
