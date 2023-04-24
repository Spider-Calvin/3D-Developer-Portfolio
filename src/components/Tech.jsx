import React from "react";

import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology,index) => (
        <Tilt className='w-24 h-24' key={technology.name}>
          <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} >
          <img src={technology.icon} />
          </motion.div>
        </Tilt>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");