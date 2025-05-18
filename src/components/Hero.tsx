import { motion } from "motion/react";

import { PiStarFourThin } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="flex w-full h-2/3 justify-start items-center p-4">
      <div className="flex flex-col gap-4">
        <div className="font-medium text-2xl">Hi! I am..</div>
        <motion.span
          initial={{ scale: 0.7 }}
          animate={{ scale: 1.0 }}
          className="font-bold italic text-9xl text-mustard"
        >
          Arun A K
        </motion.span>
        <motion.span
          className="absolute text-mustard"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [610, 650],
            y: [90, -30],
            rotate: ["0deg", "-120deg"],
          }}
          transition={{
            delay: 0.1,
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <PiStarFourThin size="70" />
        </motion.span>
        <motion.span
          className="absolute text-mustard"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [610, 630],
            y: [90, 30],
            rotate: ["0deg", "-60deg"],
          }}
          transition={{
            delay: 0.2,
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <PiStarFourThin size="40" />
        </motion.span>
        <motion.div
          className="font-normal text-5xl"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Front-end Engineer
        </motion.div>
      </div>
      <div>
        <motion.div></motion.div>
      </div>
    </div>
  );
};

export default Hero;
