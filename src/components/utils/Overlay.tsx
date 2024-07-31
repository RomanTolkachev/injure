import React, { FunctionComponent, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollLock } from "../../services/hooks/useScrollLock";

interface IInterfaceProps {
  visible?: boolean;
}

export const Overlay: FunctionComponent<IInterfaceProps> = ({ visible }) => {
  const { lockScroll, unlockScroll } = useScrollLock();
  console.log("рендер Overlay");

  useEffect(() => {
    visible ? lockScroll() : unlockScroll();
  }, [visible, lockScroll, unlockScroll]);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 z-[5] h-svh w-screen bg-black opacity-40"
          key="modal"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          animate={{ opacity: 0.4 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
          }}
        />
      )}
    </AnimatePresence>
  );
};
