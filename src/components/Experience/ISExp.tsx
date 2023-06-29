"use client";

import { motion } from "framer-motion";
import ExpTitle from "./ExpTitle";
import ExpDate from "./ExpDate";
import ExpBullets from "./ExpBullets";
import ExpCompany from "./ExpCompany";
import ExpSubtitleContainer from "./ExpSubtitleContainer";

const ISExp = () => {
  return (
    <motion.div className="col-span-2 row-span-1 flex flex-col space-y-4 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <motion.div className="flex flex-col space-y-2 w-full">
        <ExpCompany>DePauw / Information Services</ExpCompany>
        <ExpSubtitleContainer>
          <ExpTitle>Summer Intern</ExpTitle>
          <ExpDate>Jun 2021 - Aug 2021</ExpDate>
        </ExpSubtitleContainer>
        <motion.div>
          <ExpBullets>
            <motion.li>
              Successfully collaborated with IT professionals to deploy new
              hardware and software solutions on 50+ locations across campus and
              online.
            </motion.li>
            <motion.li>
              Managed the Help Desk and online task ticketing system, ensuring
              adherence to established workflows and completion of most open
              tickets within 30 minutes.
            </motion.li>
          </ExpBullets>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ISExp;
