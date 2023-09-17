"use client";

import { motion } from "framer-motion";
import ExpCompany from "./ExpCompany";
import ExpTitle from "./ExpTitle";
import ExpDate from "./ExpDate";
import ExpBullets from "./ExpBullets";
import ExpSubtitleContainer from "./ExpSubtitleContainer";
import ActionButton from "../Index/ActionButton";

const PixusExp = () => {
  return (
    <motion.div
      initial={{ backgroundColor: `linear-gradient("45deg", #171717", "#3b82f6")`}}
      // animate={{ backgroundSize: "200% 200%" }}
      // transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className=" p-[0.8px] col-span-2 row-span-2 w-full rounded-[3rem]"
    >
      <div className="justify-between flex flex-col space-y-4 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
        <div className="flex flex-col space-y-2 w-full">
          <ExpCompany>Pixus, Inc. / CaptureNoire</ExpCompany>
          <ExpSubtitleContainer>
            <ExpTitle>Software Developer Intern</ExpTitle>
            <ExpDate>Nov 2022 - Dec 2022</ExpDate>
          </ExpSubtitleContainer>
          <div>
            <ExpBullets>
              <li>
                Continued development of the CaptureNoire Photography Suite
                using agile methodology, reducing code complexity, and
                increasing efficiency by 30%.
              </li>
              <li>
                Wrote technical and non-technical documentation for the source
                code for async collaboration with other engineers, reducing
                onboarding time by 60%.
              </li>
            </ExpBullets>
          </div>
          <div className="flex flex-row space-x-2 items-baseline text-blue-500 geom text-xl lg:text-2xl">
            <ExpSubtitleContainer>
              <ExpTitle>Software Engineer Intern</ExpTitle>
              <ExpDate>Jun 2022 - Aug 2022</ExpDate>
            </ExpSubtitleContainer>
          </div>
          <div>
            <ExpBullets>
              <li>
                Spearheaded development of CaptureNoire, a photography app for
                Android optimized for people with a broad range of skin tones,
                with an upcoming beta release.
              </li>
              <li>
                Built an image processing backend with results 90% like
                competing apps while having 30% less complexity based on device
                type, and RAM usage.
              </li>
              <li>
                Engineered the app to be efficient in its memory usage for
                compatibility with most smartphones, ensuring optimal
                performance for all intended users.
              </li>
              <li>
                Applied UI/UX design and Android app development best practices
                as the sole person with a computer-science background at this
                early age start-up.
              </li>
            </ExpBullets>
          </div>
        </div>
        <ActionButton
          size="full"
          external={true}
          variant="experience"
          href="https://capturenoire.com"
          className=""
        >
          Check out CaptureNoire
        </ActionButton>
      </div>
    </motion.div>
  );
};

export default PixusExp;