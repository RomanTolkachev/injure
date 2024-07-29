import React, { FunctionComponent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IBurgerProps {
  burgerOpen: boolean;
}

const motionVariants = {
  hidden: {
    scale: 0,
    transition: {
      duration: 0.4,
    },
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.1,
    },
  },
};

export const Burger: FunctionComponent<IBurgerProps> = ({ burgerOpen }) => {
  return (
    <AnimatePresence>
      {burgerOpen && (
        <motion.div
          key="burger"
          initial={{ scale: 0 }}
          transition={{ duration: 0.1 }}
          animate={{ scale: 1, type: "spring" }}
          style={{ originX: 1, originY: 0 }}
          exit={{
            scale: 0,
            transition: {
              duration: 0.1,
            },
          }}
          className="absolute right-10 top-16 bg-my-deep-light duration-500"
        >
          <ul>
            <li>бургер</li>
            <li>бургер</li>
            <li>бургер</li>
            <li>бургер</li>
            <li>бургер</li>
            <li>бургер</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
