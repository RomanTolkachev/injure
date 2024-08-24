import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { BurgerButton } from "../buttons/BurgerButton";
import { useScrollLock } from "../../services/hooks/useScrollLock";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface IModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  closeModal,
  children,
}) => {
  const innerRef: React.RefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null);

  const { lockScroll, unlockScroll } = useScrollLock();
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (innerRef.current && !innerRef.current.contains(e.target as Node)) {
        closeModal();
      }
    }

    function handleClickEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
      }
    }

    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keydown", handleClickEscape, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("keydown", handleClickEscape, true);
    };
  }, [closeModal]);

  useEffect(() => {
    lockScroll();
    return () => unlockScroll();
  }, [lockScroll, unlockScroll]);

  const modalVariants = {
    start: {
      opacity: 0,
    },
    appearing: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return createPortal(
    location.state.background && (
      <motion.section
        variants={modalVariants}
        initial="start"
        animate="appearing"
        exit="exit"
        className={
          "fixed left-0 top-0 z-[11] flex h-full w-full items-center justify-center bg-black bg-opacity-60"
        }
      >
        <div
          className={"relative z-[12] h-[500px] w-[700px] bg-my-gray-dark"}
          ref={innerRef}
        >
          {children}
          <div
            className={"absolute right-[10px] top-[10px]"}
            onClick={closeModal}
          >
            <BurgerButton
              burgerOpen={true}
              className={"flex h-[70px] w-[70px]"}
            />
          </div>
        </div>
      </motion.section>
    ),
    document.getElementById("portal") as HTMLElement,
  );
};

export default Modal;
