import { motion } from "motion/react";
import type { ButtonType } from "../utils/types";

const Button = ({ label, onClick = () => {} }: ButtonType) => {
  return (
    <motion.button
      className="font-normal text-2xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default Button;
