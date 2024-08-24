import React, { FunctionComponent } from "react";
import { Params, useParams } from "react-router-dom";
import { services } from "../../services";
import { ImgCustom } from "../utils/ImgCustom";

export const ServiceLongRead: FunctionComponent = () => {
  const { serviceId }: Params<string> = useParams();
  // @ts-ignore
  const article = services.filter((item) => item.id === serviceId);
  return (
    <article className="flex h-fit w-full flex-col overflow-hidden rounded-lg px-8">
      <div className="h-fit overflow-hidden">
        <h4
          className={
            "mb-4 w-full bg-my-deep-light text-center text-xl font-bold sm:mb-8 sm:text-3xl"
          }
        >
          {article[0].title}
        </h4>
        <div className={"mb-4 aspect-[2.5] w-full sm:mb-8"}>
          <ImgCustom
            src={article[0].image}
            className={"h-full w-full object-cover"}
          />
        </div>
        <div
          // prettier-ignore
          className="font-Georgia
          h-fit
          [&>h5]:text-center [&>h5]:font-semibold [&>h5]:first-letter:capitalize
          [&>p]:indent-8 [&>p]:mb-2
          [&_ul]:list-inside [&_ul]:list-disc [&_ul]:indent-4
          [&_li]:first-letter:capitalize
          [&_h6]:inline-block"
          dangerouslySetInnerHTML={{ __html: article[0].content }}
        ></div>
      </div>
    </article>
  );
};
