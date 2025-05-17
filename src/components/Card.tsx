import type { CardType } from "../utils/types";
import { motion } from "motion/react";

const Card = ({ content }: CardType) => {
  return <motion.div className="w-3 h-3">{content}</motion.div>;
};

export default Card;
