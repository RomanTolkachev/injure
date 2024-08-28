import React, { FunctionComponent, useEffect, useRef } from "react";
import { Params, useParams } from "react-router-dom";
import { services } from "../../services";
import { ImgCustom } from "../utils/ImgCustom";
import { useMotionValueEvent, useScroll } from "framer-motion";

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
      if (scrollPosition > 0 && scrollPosition < 1) {
        console.log("сработал кейс середина");
        el.classList.remove("top-mask-dark", "bottom-mask-dark");
        el.classList.add("bot-top-mask-dark");
      }
    }
  }
};

export const ServiceLongRead: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  useEffect(() => {
    if (
      containerRef.current!.clientHeight <
      containerRef.current!.children[0].clientHeight
    ) {
      handleShadow(containerRef, 0);
    }
  }, []);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    handleShadow(containerRef, latest);
  });

  const { serviceId }: Params<string> = useParams();
  const article = services.filter((item) => item.id === serviceId);
  return (
    <div
      ref={containerRef}
      className={`h-fit max-h-[calc(100svh-12svh)] overflow-y-auto`}
    >
      <article className={`flex h-fit w-full flex-col px-8`}>
        <div className="h-fit">
          <h4
            className={
              "mb-4 w-full text-center text-xl font-bold sm:mb-8 sm:text-3xl"
            }
          >
            {article[0].title}
          </h4>
          <div className={"relative mb-4 aspect-[2.5] w-full sm:mb-8"}>
            <ImgCustom
              src={article[0].image}
              className={"absolute h-full w-full object-cover"}
            />
            <div
              className={
                "absolute top-0 h-full w-full bg-[#000D8199] opacity-60"
              }
            ></div>
          </div>
          <div
            // prettier-ignore
            className="font-Georgia
          h-fit pb-20
          [&>h5]:text-center [&>h5]:font-semibold [&>h5]:first-letter:capitalize
          [&>p]:indent-8 [&>p]:mb-2
          [&_ul]:list-inside [&_ul]:list-disc [&_ul]:indent-4
          [&_li]:first-letter:capitalize [&_ul]:space-y-2
          [&_h6]:inline-block"
            dangerouslySetInnerHTML={{ __html: article[0].content }}
          ></div>
        </div>
      </article>
    </div>
  );
};
