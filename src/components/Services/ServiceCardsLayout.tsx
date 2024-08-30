import React, { FunctionComponent } from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../../services";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IServiceItem } from "../../services/utils/types";

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
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    console.log(location.state);
  };
  const location = useLocation();
  const filtered: IServiceItem[] = services.filter(
    (item: IServiceItem) => item.type === "physical",
  );

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
            onClick={(e) => handleClick(e)}
            variants={listVariants}
            className={`h-full w-full ${item.size}`}
            key={key}
          >
            <Link to={`${item.id}`} state={{ background: location }}>
              <ServiceCard serviceData={item} className={``} />
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
