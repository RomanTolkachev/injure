import { FunctionComponent } from "react";

export const HeaderNews: FunctionComponent = () => {
  return (
    <div className="flex w-full justify-between border-b-2 border-b-my-main-blue px-1 py-4 font-black">
      <h2 className="text-2xl uppercase tracking-tighter text-my-main-blue">
        актуальные новости
      </h2>
      <button className="font-sm mt-auto block h-fit align-text-bottom text-my-deep-gray">
        смотреть все новости
      </button>
    </div>
  );
};
