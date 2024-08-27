import React, { FunctionComponent, useEffect, useRef } from "react";
import { Params, useParams } from "react-router-dom";
import { services } from "../../services";
import { ImgCustom } from "../utils/ImgCustom";

export const ServiceLongRead: FunctionComponent = () => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(
      `реф: ${scrollableRef.current!.clientHeight}, парент: ${scrollableRef.current!.parentElement!.clientHeight}`,
    );
    if (
      scrollableRef.current!.clientHeight -
        scrollableRef.current!.parentElement!.clientHeight >
      0
    ) {
      scrollableRef.current!.parentElement!.classList.add("bottom-mask-dark");
      scrollableRef.current!.parentElement!.addEventListener("scroll", (e) => {
        handleScroll(e);
      });
    }

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const targetHeight = target.clientHeight;
      const targetScrollHeight: number = target.scrollHeight;
      const scrollPosition: number =
        targetScrollHeight - (target.scrollTop + targetHeight);
      console.log(scrollPosition);
      switch (scrollPosition) {
        case targetScrollHeight - targetHeight: {
          target.classList.remove("top-mask-dark", "bot-top-mask-dark");
          target.classList.add("bottom-mask-dark");
          break;
        }
        case 0: {
          target.classList.add("top-mask-dark");
          target.classList.remove("bottom-mask-dark", "bot-top-mask-dark");
          break;
        }
        default: {
          if (
            scrollPosition > 0 &&
            scrollPosition < targetScrollHeight - targetHeight
          ) {
            target.classList.remove("top-mask-dark", "bottom-mask-dark");
            target.classList.add("bot-top-mask-dark");
          }
        }
      }
    };
  }, []);

  const { serviceId }: Params<string> = useParams();
  const article = services.filter((item) => item.id === serviceId);
  return (
    <article className={`flex h-fit w-full flex-col px-8`} ref={scrollableRef}>
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
            className={"absolute top-0 h-full w-full bg-[#000D8199] opacity-60"}
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
  );
};
