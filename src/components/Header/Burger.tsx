import React, {
  Dispatch,
  FunctionComponent,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { IMenuItem } from "../../services/utils/types";
import { Link, NavLink } from "react-router-dom";

interface IBurgerProps {
  setBurgerOpen: Dispatch<SetStateAction<boolean>>;
  burgerOpen: boolean;
  className?: string;
  menuList: Array<IMenuItem>;
}

const motionVariants: Variants = {
  closed: {
    scaleY: 0,
  },
  open: {
    scaleY: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      bounce: 0.4,
    },
  },
  onClose: {
    scaleY: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const itemVariants: Variants = {
  closed: { opacity: 0, y: 20, transition: { duration: 2 } },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, type: "spring", stiffness: 300, damping: 24 },
  },
};

export const Burger: FunctionComponent<IBurgerProps> = ({
  burgerOpen,
  className,
  menuList,
  setBurgerOpen,
}) => {
  const handleCloseBurger: MouseEventHandler<HTMLLIElement> = () => {
    return setBurgerOpen(false);
  };
  return (
    <AnimatePresence>
      {burgerOpen && (
        <motion.div
          key="burger"
          style={{ originY: 0 }}
          variants={motionVariants}
          initial="closed"
          animate="open"
          exit="onClose"
          className={`${className}`}
        >
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.2,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: "auto" }}
            className="burger_nav flex w-full flex-col bg-my-blue-light px-6 py-2 [&>li:not(:last-of-type)]:border-b-2 [&>li:not(last-of-type)]:border-b-my-deep-light"
          >
            {menuList.map((item, key) => {
              return (
                <motion.li
                  variants={itemVariants}
                  onClick={handleCloseBurger}
                  key={key}
                  className="w-full text-nowrap p-2 text-end text-2xl text-white"
                >
                  <Link className="block w-full p-4" to={item.path}>
                    {item.text}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
