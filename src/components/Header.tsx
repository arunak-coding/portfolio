import { motion } from "motion/react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 7, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  }),
};

const Header = () => {
  return (
    <div className="grid grid-cols-2 w-full h-28 backdrop-blur-lg bg-white/10 p-6 shadow-lg rounded-2xl">
      <motion.svg
        width="150"
        height="150"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M9 227.5C9 227.5 61.1686 181.193 78.9829 136.939C95.1818 96.6968 84.1046 30.6949 80.1974 10.8324C79.9796 9.72512 81.5407 9.10852 82.1371 10.0666L217.5 227.5M52.6014 180.5C-64.8986 123.076 267.601 56.5765 267.601 56.5765"
          stroke="#FADB3F"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
          variants={draw}
          custom={5.5}
        />
      </motion.svg>
      <div>
        <motion.button
          className="text-amber-50"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          About
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
