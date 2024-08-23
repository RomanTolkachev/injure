import { FunctionComponent, ReactNode } from "react";
import { BroadCrumbs } from "../utils/BroadCrumbs";

interface ISectionDescription {
  children?: ReactNode;
  header: string;
  BGImage: string;
  className?: string;
}

export const SectionDescription: FunctionComponent<ISectionDescription> = ({
  header,
  BGImage,
  className,
}) => {
  return (
    <div
      className={`bg-cyan-[#1c3749] relative mx-auto mb-10 hidden aspect-[5.7] w-full text-my-white md:block ${className}`}
    >
      <img
        src={BGImage}
        alt="bg"
        className="absolute z-[6] h-full w-full object-cover"
      />
      <div className="absolute z-[7] h-full w-full bg-my-blue-light opacity-30"></div>
      <div className="absolute z-[8] h-full w-full md:p-5 lg:p-7 xl:p-10">
        <BroadCrumbs />
        <h2 className="font-black first-letter:capitalize md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          {header}
        </h2>
      </div>
    </div>
  );
};
