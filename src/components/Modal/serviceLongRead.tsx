import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { services } from "../../services";
import { ImgCustom } from "../utils/ImgCustom";

export const ServiceLongRead: FunctionComponent = () => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [heightOfBlock, setHeightOfBlock] = useState<number>(0);
  const [heightOfContainer, setHeightOfContainer] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  useEffect(() => {
    const handle = () => {
      setHeightOfBlock(scrollableRef!.current!.clientHeight);
      setHeightOfContainer(scrollableRef!.current!.parentElement!.clientHeight);
      setScrollTop(scrollableRef!.current!.parentElement!.scrollTop);
    };
    scrollableRef.current!.parentElement!.addEventListener("scroll", handle);
  }, []);
  useEffect(() => {
    const parent: HTMLElement = scrollableRef.current!.parentElement!;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const containerHeight = target.clientHeight;
      const scrolled: number = target.scrollTop;
      const childrenHeight: number = target.children[0].clientHeight;
      console.log(scrolled);
      switch (scrolled) {
        case 0: {
          target.classList.remove("top-mask-dark", "bot-top-mask-dark");
          target.classList.add("bottom-mask-dark");
          break;
        }
        case childrenHeight - containerHeight: {
          target.classList.add("top-mask-dark");
          target.classList.remove("bottom-mask-dark", "bot-top-mask-dark");
          break;
        }
        default: {
          if (scrolled > 0 && scrolled < childrenHeight - containerHeight) {
            target.classList.remove("top-mask-dark", "bottom-mask-dark");
            target.classList.add("bot-top-mask-dark");
          }
        }
      }
    };
    if (scrollableRef.current!.clientHeight - parent.clientHeight > 0) {
      parent.classList.add("bottom-mask-dark");
      parent.addEventListener("scroll", (e) => {
        handleScroll(e);
      });
    }

    return () => {
      if (scrollableRef) {
        parent.removeEventListener("scroll", handleScroll);
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
        <div>{`высота контейнера:${heightOfContainer}, высота блока:${heightOfBlock} проскроллили:${scrollTop}`}</div>

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
