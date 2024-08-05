import { FunctionComponent } from "react";
import { news } from "../../../services/utils/news";
import { HeaderNews } from "./HeaderNews";
import { NewsItem } from "./NewsItem";

export const News: FunctionComponent = () => {
  return (
    <div className="white-bottom-mask container mb-32 w-full max-w-[1280px] pt-32">
      <HeaderNews />
      <ul className="[&>li]:border-b [&>li]:border-b-my-main-blue">
        {news.slice(0, 3).map((item) => {
          return (
            <li>
              <NewsItem news={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
