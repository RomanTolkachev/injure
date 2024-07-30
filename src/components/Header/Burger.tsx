import React, {
  Dispatch,
  FunctionComponent,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMenuItem } from "../../services/utils/types";
import { NavLink } from "react-router-dom";

interface IBurgerProps {
  setBurgerOpen: Dispatch<SetStateAction<boolean>>;
  burgerOpen: boolean;
  className?: string;
  menuList: Array<IMenuItem>;
}

const motionVariants = {
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
          className={`bg-my-deep-light ${className}`}
        >
          <ul className="burger_nav flex w-full flex-col bg-my-blue-light px-6 py-2 [&>li:not(:last-of-type)]:border-b-2 [&>li:not(last-of-type)]:border-b-my-deep-light">
            {menuList.map((item, key) => {
              return (
                <li
                  onClick={handleCloseBurger}
                  key={key}
                  className="w-full text-nowrap p-2 text-end text-2xl text-white"
                >
                  <NavLink className="block w-full p-4" to={item.path}>
                    {item.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
