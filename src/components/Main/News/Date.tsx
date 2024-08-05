import { FunctionComponent } from "react";

interface IDateHeaderProps {
  date: Date;
}

export const Date: FunctionComponent<IDateHeaderProps> = ({ date }) => {
  return (
    <span className="text-md font-base font-black tracking-wide text-my-deep-light">
      {date
        .toLocaleString("ru", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        .replace("г.", "года")}
    </span>
  );
};
