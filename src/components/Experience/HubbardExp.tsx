"use client";

import { motion } from "framer-motion";
import ExpTitle from "./ExpTitle";
import ExpDate from "./ExpDate";
import ExpBullets from "./ExpBullets";
import ExpCompany from "./ExpCompany";
import ExpSubtitleContainer from "./ExpSubtitleContainer";

const HubbardExp = () => {
  return (
    <motion.div className="col-span-2 row-span-1 flex flex-col space-y-4 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <motion.div className="flex flex-col space-y-2 w-full">
        <ExpCompany>DePauw / Hubbard Center</ExpCompany>
        <ExpSubtitleContainer>
          <ExpTitle>Marketing Intern</ExpTitle>
          <ExpDate>Nov 2021 - May 2022</ExpDate>
        </ExpSubtitleContainer>
        <motion.div>
          <ExpBullets>
            <motion.li>
            Implemented a new marketing strategy to bolster the efforts of the career center through strategy meetings with directors, increasing reach by 50%.
            </motion.li>
            <motion.li>
              Delegated work to the team in weekly meetings to timely and
              effective marketing of events to 1700+ students using an
              omni-channel approach.
            </motion.li>
          </ExpBullets>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HubbardExp;
