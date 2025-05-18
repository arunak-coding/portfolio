import type { CardType } from "../utils/types";
import { motion } from "motion/react";

const Card = ({ content }: CardType) => {
  return <motion.div>{content}</motion.div>;
};

export default Card;
