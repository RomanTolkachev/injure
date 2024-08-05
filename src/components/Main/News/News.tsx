import { FunctionComponent } from "react";
import { news } from "../../../services/utils/news";
import { HeaderNews } from "./HeaderNews";
import { DateHeader } from "./DateHeader";
import { ContentNews } from "./ContentNews";

export const News: FunctionComponent = () => {
  return (
    <div className="container w-full max-w-[1280px] pt-32">
      <HeaderNews />
      <article className="flex w-full py-8 [&>*]:basis-1/2">
        <DateHeader date={news[0].date} />
        <ContentNews header={news[0].header} preview={news[0].preview} />
      </article>
    </div>
  );
};
