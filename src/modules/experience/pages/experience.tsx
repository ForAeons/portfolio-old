import React from "react";
import { motion } from "framer-motion";

import { slideVariants } from "@/lib/variants";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Cvwo } from "..";
import { slideFadeTransition } from "@/lib/transition";
import { experience } from "@/constants";

export const Experience: React.FC = () => {
  const routeState = useSelector((state: RootState) => state.route);
  return (
    <motion.div
      className="flex flex-col gap-y-12 items-center mx-6 w-full"
      variants={slideVariants}
      custom={routeState.direction}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideFadeTransition}
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl self-start">
        {experience.title}
      </h1>

      <Cvwo />
    </motion.div>
  );
};

export default Experience;
