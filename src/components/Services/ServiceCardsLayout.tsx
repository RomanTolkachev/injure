import { FunctionComponent } from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../../services";
import { motion } from "framer-motion";

const parentVariants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.3,
      duration: 0.7,
      delayChildren: 0.2,
    },
  },
};

const listVariants = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

export const ServiceCardsLayout: FunctionComponent = () => {
  const filtered = services.filter((item) => item.type === "physical");

  return (
    <motion.ul
      variants={parentVariants}
      initial="start"
      animate="end"
      className={
        "grid-container mx-auto grid max-w-[1024px] grid-flow-dense auto-rows-fr grid-cols-3 gap-4"
      }
    >
      {filtered.map((item, key) => {
        return (
          <motion.li
            variants={listVariants}
            className={`h-full w-full ${item.size}`}
            key={key}
          >
            <ServiceCard serviceData={item} className={`h-full w-full`} />
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
