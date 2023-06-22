"use client";

import { motion } from "framer-motion";
import ExpTitle from "./ExpTitle";
import ExpDate from "./ExpDate";
import ExpBullets from "./ExpBullets";
import ExpCompany from "./ExpCompany";

const ISExp = () => {
  return (
    <motion.div className="col-span-2 row-span-1 flex flex-col space-y-4 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <motion.div className="flex flex-col space-y-2 w-full">
      <ExpCompany>DePauw / Information Services</ExpCompany>
        <motion.div className="flex flex-row space-x-2 items-baseline text-blue-500 geom text-xl lg:text-2xl">
          <ExpTitle>Summer Intern</ExpTitle>
          <ExpDate>
            Jun 2021 - Aug 2021
          </ExpDate>
        </motion.div>
        <motion.div>
          <ExpBullets>
            <motion.li>
              Successfully collaborated with IT professionals to deploy new
              hardware and software solutions on campus.
            </motion.li>
            <motion.li>
              Managed the Help Desk and online task ticketing system, ensuring
              adherence to established workflows and timely completion of open
              tickets.
            </motion.li>
          </ExpBullets>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ISExp;
