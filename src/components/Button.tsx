import { motion } from "motion/react";
import type { ButtonType } from "../utils/types";

const Button = ({ label, onClick = () => {} }: ButtonType) => {
  return (
    <motion.button
      className="text-2xl font-bold italic"
      initial={{ color: "#fef8d7" }}
      whileHover={{ scale: 1.1, color: "#fadb3f" }}
      whileTap={{ scale: 0.9, color: "#fadb3f" }}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default Button;
