import { motion } from "motion/react";
import type { AnchorType } from "../utils/types";

const Anchor = ({ label, href }: AnchorType) => {
  return (
    <motion.a
      className="text-2xl font-bold italic"
      initial={{ color: "#fef8d7" }}
      whileHover={{ scale: 1.1, color: "#fadb3f" }}
      whileTap={{ scale: 0.9, color: "#fadb3f" }}
      href={href}
    >
      {label}
    </motion.a>
  );
};

export default Anchor;
