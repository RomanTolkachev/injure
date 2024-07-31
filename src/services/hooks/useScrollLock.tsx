import React from "react";

export const useScrollLock = () => {
  let scrollPosition: number;
  const lockScroll = React.useCallback(() => {
    scrollPosition = window.scrollY;
    console.log("scroll lock сработал");
    document.documentElement.classList.add("start-scrolling");
    document.body.classList.add("stop-scrolling");
    document.body.scroll(0, scrollPosition);
  }, []);

  const unlockScroll = React.useCallback(() => {
    console.log("scroll анлок сработал");
    document.body.classList.remove("stop-scrolling");
    document.documentElement.classList.remove("start-scrolling");
    document.documentElement.scroll(0, scrollPosition);
  }, []);

  return { lockScroll, unlockScroll };
};
