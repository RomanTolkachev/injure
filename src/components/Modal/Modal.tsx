import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useScrollLock } from "../../services/hooks/useScrollLock";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Sprite } from "../Sprite";

interface IModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

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

const handleShadow = (
  element: React.RefObject<HTMLElement>,
  scrollPosition: number,
) => {
  const el = element.current!;
  switch (scrollPosition) {
    case 0: {
      console.log("скролл вначале");
      el.classList.remove("top-mask-dark", "bot-top-mask-dark");
      el.classList.add("bottom-mask-dark");
      break;
    }
    case 1: {
      console.log("домотали до конца");
      el.classList.add("top-mask-dark");
      el.classList.remove("bottom-mask-dark", "bot-top-mask-dark");
      break;
    }
    default: {
      if (scrollPosition === 0.5) {
        console.log("сработал кейс середина");
        el.classList.remove("top-mask-dark", "bottom-mask-dark");
        el.classList.add("bot-top-mask-dark");
      }
    }
  }
};

const Modal: React.FunctionComponent<IModalProps> = ({
  closeModal,
  children,
}) => {
  const location = useLocation();

  // функция блокировки сролла при монтировании

  const { lockScroll, unlockScroll } = useScrollLock();
  useEffect(() => {
    lockScroll();
    return () => unlockScroll();
  }, [lockScroll, unlockScroll]);

  // далее функция для определения тени

  const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({ container: containerRef });

  const getScrollPosition = (ref: React.RefObject<any>): 0 | 0.5 | 1 => {
    const containerHeight = ref.current!.clientHeight;
    const scrollTop = Math.ceil(ref.current!.scrollTop);
    const childrenHeight = ref.current!.children[0].clientHeight;
    if (scrollTop === 0) {
      console.log("мы наверху");
      return 0;
    } else if (scrollTop + containerHeight >= childrenHeight) {
      console.log("мы снизу");
      return 1;
    } else {
      console.log("мы в середине");
      return 0.5;
    }
  };

  useEffect(() => {
    const container = containerRef.current!;
    const handleScroll = (): void =>
      handleShadow(containerRef, getScrollPosition(containerRef));
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //   if (
  //     containerRef.current!.clientHeight <
  //     containerRef.current!.children[0].clientHeight
  //   ) {
  //     handleShadow(containerRef, 0);
  //   }
  // }, []);
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   if (
  //     containerRef.current!.clientHeight >=
  //     containerRef.current!.children[0].clientHeight
  //   ) {
  //     return;
  //   }
  //   console.log("сработал юз моушен вэлью");
  //   handleShadow(containerRef, latest);

  // далее функции для закрытия модалки

  const innerRef: React.RefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null);

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
            "relative z-[12] my-auto h-full max-h-full w-full overflow-hidden rounded-3xl bg-my-deep-light py-10 sm:h-fit sm:pb-10 sm:pt-20 md:w-[700px]"
          }
          ref={innerRef}
        >
          <div
            ref={containerRef}
            className={`h-fit max-h-[calc(100dvh-5rem)] overflow-y-auto sm:max-h-[calc(100svh-7.5rem)]`}
          >
            {children}
          </div>
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
