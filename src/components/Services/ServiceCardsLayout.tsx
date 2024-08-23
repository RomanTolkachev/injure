import { FunctionComponent } from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../../services";
import { motion } from "framer-motion";

const parentVariants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.15,
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
        "sm:grid-container small-grid-container mx-4 grid grid-flow-dense auto-rows-fr grid-cols-1 gap-2 py-4 sm:mx-auto sm:max-w-screen-sm sm:grid-cols-2 sm:gap-4 md:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-3"
      }
    >
      {filtered.map((item, key) => {
        return (
          <motion.li
            variants={listVariants}
            className={`h-full w-full ${item.size}`}
            key={key}
          >
            <ServiceCard serviceData={item} className={``} />
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
