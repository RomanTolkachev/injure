import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useScrollLock } from "../../services/hooks/useScrollLock";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Sprite } from "../Sprite";

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
            "relative z-[12] my-auto mb-4 h-full max-h-full w-full overflow-hidden rounded-3xl bg-my-deep-light pt-10 sm:h-fit sm:pb-8 sm:pt-20 md:w-[700px]"
          }
          ref={innerRef}
        >
          {children}
          <div
            className={
              "absolute right-[-10px] top-[-12px] h-[70px] p-3 text-my-deep-gray hover:cursor-pointer sm:right-[7px] sm:top-[7px]"
            }
            onClick={closeModal}
          >
            <Sprite close={true} />
          </div>
        </div>
      </motion.section>
    ),
    document.getElementById("portal") as HTMLElement,
  );
};

export default Modal;
