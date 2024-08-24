import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { BurgerButton } from "../buttons/BurgerButton";
import { useScrollLock } from "../../services/hooks/useScrollLock";
import { motion } from "framer-motion";
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
          "fixed left-0 top-0 z-[11] flex h-full max-h-full w-full justify-center bg-black bg-opacity-80 font-Inter"
        }
      >
        <div
          className={
            "relative z-[12] my-auto h-full max-h-full w-full overflow-hidden rounded-3xl bg-my-deep-light py-8 pt-20 sm:h-fit md:w-[700px]"
          }
          ref={innerRef}
        >
          <div className="h-fit max-h-[calc(100vh-7rem)] overflow-y-auto">
            {children}
          </div>
          <div
            className={"absolute right-[0px] top-[0px]"}
            onClick={closeModal}
          >
            <BurgerButton
              burgerOpen={true}
              className={"flex h-[70px] w-[70px] [&_span]:bg-black"}
            />
          </div>
        </div>
      </motion.section>
    ),
    document.getElementById("portal") as HTMLElement,
  );
};

export default Modal;
