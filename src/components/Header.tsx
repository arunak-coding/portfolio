import Button from "./Button";
import { motion } from "motion/react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 3, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  }),
};

const Header = () => {
  return (
    <div className="w-full backdrop-blur-lg p-4 bg-cornsilk/3 rounded-2xl grid grid-cols-2 items-center">
      <motion.svg
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
      </motion.svg>

      <motion.div className="grid grid-cols-4">
        <Button label="About" />
        <Button label="Skills" />
        <Button label="Experience" />
        <Button label="Contact" />
      </motion.div>
    </div>
  );
};

export default Header;
