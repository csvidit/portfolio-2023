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
    <motion.div className="justify-between w-full col-span-2 row-span-2 flex flex-col space-y-4 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <motion.div className="flex flex-col space-y-2 w-full">
        <ExpCompany>Pixus, Inc. / CaptureNoire</ExpCompany>
        <ExpSubtitleContainer>
          <ExpTitle>Software Developer Intern</ExpTitle>
          <ExpDate>Nov 2022 - Dec 2022</ExpDate>
        </ExpSubtitleContainer>
        <motion.div>
          <ExpBullets>
            <motion.li>
              Continued development of the CaptureNoire Photography Suite using
              agile methodology, reducing code complexity, and increasing app
              efficiency by 30%.
            </motion.li>
            <motion.li>
              Wrote detailed technical and non-technical documentation for the
              source code of the application for seamless async collaboration
              with other engineers.
            </motion.li>
          </ExpBullets>
        </motion.div>
        <motion.div className="flex flex-row space-x-2 items-baseline text-blue-500 geom text-xl lg:text-2xl">
          <motion.div>Software Engineer Intern</motion.div>
          <motion.div className="text-neutral-500 text-base">
            Jun 2022 - Aug 2022
          </motion.div>
        </motion.div>
        <motion.div>
          <motion.ul className="flex flex-col space-y-1 text-base text-neutral-300 list-disc">
            <motion.li>
              Spearheaded development of CaptureNoire, a photography app for
              Android optimized for people with a broad range of skin tones,
              with an upcoming beta release.
            </motion.li>
            <motion.li>
              Applied UI/UX design and Android app development best practices as
              the sole person with a computer-science background at this early
              age start-up.
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
      <ActionButton
        external={true}
        variant="experience"
        href="https://capturenoire.com"
        className=""
      >
        Check out CaptureNoire
      </ActionButton>
    </motion.div>
  );
};

export default PixusExp;

{
  /* <ol className="relative border-l border-neutral-700">
<li className="mb-10 ml-6">
  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-neutral-900 bg-blue-900">
    <svg
      aria-hidden="true"
      className="w-3 h-3 text-blue-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </span>
  <h3 className="flex items-center mb-1 text-lg dark:text-neutral-100">
    Flowbite Application UI v2.0.0{" "}
    <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3">
      Latest
    </span>
  </h3>
  <time className="block mb-2 text-sm font-normal leading-none text-neutral-500">
    Released on January 13th, 2022
  </time>
  <p className="mb-4 text-base font-normal dark:text-neutral-500">
    Get access to over 20+ pages including a dashboard layout, charts,
    kanban board, calendar, and pre-order E-commerce & Marketing
    pages.
  </p>
</li>
</ol> */
}
