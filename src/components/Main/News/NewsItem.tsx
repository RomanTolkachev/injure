import { FunctionComponent } from "react";
import { Date } from "./Date";
import { ContentNews } from "./ContentNews";
import { INews } from "../../../services/utils/types";

export const NewsItem: FunctionComponent<{ news: INews }> = ({ news }) => {
  return (
    <article className="flex w-full py-6 [&>*]:basis-1/2">
      <Date date={news.date} />
      <ContentNews header={news.header} preview={news.preview} />
    </article>
  );
};
