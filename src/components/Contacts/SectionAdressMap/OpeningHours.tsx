import { FunctionComponent } from "react";

interface IOpeningHours {
  className?: string;
  workDays?: string;
  workTime?: string;
}

export const OpeningHours: FunctionComponent<IOpeningHours> = ({
  className,
  workDays = "Понедельник - Пятница",
  workTime = "09:00 - 19:00",
}) => {
  return (
    <div className={`w-full first-letter:capitalize ${className}`}>
      <h5 className="sm:text-my-gray-header text-news-preview text-my-gray sm:text-sm sm:font-bold lg:mb-1">
        режим работы
      </h5>
      <div className="flex w-full flex-col sm:flex-row sm:gap-10 lg:justify-between">
        <span className="text-2xl font-normal">{workDays}</span>
        <span className="text-nowrap text-2xl font-normal">{workTime}</span>
      </div>
    </div>
  );
};
