"use client";

import { motion } from "framer-motion";
import ExpCompany from "./ExpCompany";
import ExpTitle from "./ExpTitle";
import ExpDate from "./ExpDate";
import ExpBullets from "./ExpBullets";
import ExpSubtitleContainer from "./ExpSubtitleContainer";
import ActionLink from "../ActionLink";
import KeySkillsContainer from "./KeySkillsContainer";
import KeySkillItem from "./KeySkillItem";
import { SiAndroid, SiAndroidstudio } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbJetpack } from "react-icons/tb";
import { MdArchitecture } from "react-icons/md";
import { BsAndroid } from "react-icons/bs";

const PixusExp = () => {
  return (
    <motion.div
      initial={{
        backgroundColor: `linear-gradient("45deg", #171717", "#3b82f6")`,
      }}
      // animate={{ backgroundSize: "200% 200%" }}
      // transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className=" p-[0.8px] col-span-2 row-span-2 w-full rounded-[3rem]"
    >
      <div className="flex flex-col space-y-4 justify-between items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
        <div className="flex flex-col space-y-2 w-full">
          <ExpCompany>Pixus, Inc. / CaptureNoire</ExpCompany>
          <ExpSubtitleContainer>
            <ExpTitle>Software Engineer Intern</ExpTitle>
            <ExpDate>Jun 2022 - Dec 2022</ExpDate>
          </ExpSubtitleContainer>
          <div>
            <ExpBullets>
              <li>
                Spearheaded development of CaptureNoire, an Android photography
                app catering to diverse skin tones, with an upcoming beta
                release
              </li>
              <li>
                Applied best practices in UI/UX design, object-oriented
                principles, and Android development as the sole computer science
                expert at a budding startup
              </li>
              <li>
                Engineered a high quality and innovative image processing
                backend that achieved results 90% equivalent to competitor apps
                with 30% less complexity
              </li>
              <li>
                Maximized compatibility and optimized RAM usage based on device
                type by providing backward compatibility across SDKs to meet
                quality standards.
              </li>
              <li>
                Improved efficiency by 30% through agile development, code
                simplification, and efficient algorithms for the CaptureNoire
                photography application
              </li>
              <li>
                Reduced onboarding time by 60% and enhanced collaboration by
                creating comprehensive technical and non-technical documentation
              </li>
              <li>
                Formulated user testing for adding AR functionality using ARCore
                and introducing premium subscriptions to the application in the
                medium-term
              </li>
            </ExpBullets>
          </div>
        </div>
        <KeySkillsContainer>
          <KeySkillItem icon={<FaJava />}>Java</KeySkillItem>
          <KeySkillItem icon={<SiAndroid />}>Android API</KeySkillItem>
          <KeySkillItem icon={<TbJetpack />}>Android Jetpack</KeySkillItem>
          <KeySkillItem icon={<MdArchitecture />}>MVC</KeySkillItem>
          <KeySkillItem icon={<MdArchitecture />}>MVVM</KeySkillItem>
          <KeySkillItem icon={<SiAndroidstudio />}>Android Studio</KeySkillItem>
        </KeySkillsContainer>
        <ActionLink
          size="full"
          variant="experience"
          href="https://capturenoire.com"
          className=""
        >
          Check out CaptureNoire
        </ActionLink>
      </div>
    </motion.div>
  );
};

export default PixusExp;
