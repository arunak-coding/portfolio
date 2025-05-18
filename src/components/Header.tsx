import { useState } from "react";
import Anchor from "./Anchor";
import { AnimatePresence, motion } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";

// const draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: () => ({
//     pathLength: 1,
//     opacity: 1,
//     transition: {
//       pathLength: { type: "spring", duration: 3, bounce: 0 },
//       opacity: { duration: 0.01 },
//     },
//   }),
// };

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navBtns = (
    <>
      <Anchor label="ABOUT" href="#about" />
      <Anchor label="SKILLS" href="#skills" />
      <Anchor label="EXPERIENCE" href="#experience" />
      <Anchor label="CONTACT" href="#contact" />
    </>
  );

  return (
    <div className="flex items-center justify-between sticky w-full backdrop-blur-lg px-12 py-4 bg-cornsilk/3 rounded-2xl">
      {/* <motion.svg
        width="80"
        height="80"
        viewBox="0 0 280 225"
        initial="hidden"
        animate="visible"
        className="justify-self-start"
      >
        <motion.path
          d="M9 227.5C9 227.5 61.1686 181.193 78.9829 136.939C95.1818 96.6968 84.1046 30.6949 80.1974 10.8324C79.9796 9.72512 81.5407 9.10852 82.1371 10.0666L217.5 227.5M52.6014 180.5C-64.8986 123.076 267.601 56.5765 267.601 56.5765"
          stroke="#fadb3f"
          whileHover={{ stroke: "#333" }}
          style={{ transition: "stroke 0.3s ease" }}
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
          variants={draw}
          custom={5.5}
        />
      </motion.svg> */}

      <motion.div
        className="text-5xl font-extrabold italic text-mustard flex"
        whileHover={{ color: "#fef8d7" }}
      >
        {"A.".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div className="hidden md:flex items-center justify-between gap-10">
        {navBtns}
      </motion.div>
      <div className="flex items-center md:hidden">
        <motion.button
          className="text-4xl"
          initial={{ color: "#fef8d7" }}
          whileHover={{ scale: 1.1, color: "#fadb3f" }}
          whileTap={{ scale: 0.9, color: "#fadb3f" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-24 right-0.5 z-10 p-4 bg-night border border-mustard rounded-2xl shadow-xl"
            >
              <div className="flex flex-col items-center gap-4">{navBtns}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
