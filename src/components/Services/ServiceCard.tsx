import { motion } from "framer-motion";
import React, { FunctionComponent, useState } from "react";

interface IServiceCard {
  className?: string;
  serviceData: {
    title: string;
    type: string;
    content: string;
    image?: string;
    size?: string;
  };
}

export const ServiceCard: FunctionComponent<IServiceCard> = ({
  className,
  serviceData,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleHover = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsHover(true);
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsHover(false);
  };

  const motionHover = {
    scale: 1.05,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
    },
  };

  const noHover = {
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.2,
    },
  };

  const imageHover = {
    opacity: 0.6,
  };

  return (
    <div
      onMouseEnter={(e) => handleHover(e)}
      onMouseLeave={(e) => handleLeave(e)}
      className={`${className} relative overflow-hidden bg-purple-100`}
    >
      <div
        className={
          "absolute z-[6] flex h-full w-full items-center justify-center"
        }
      >
        <motion.img
          animate={isHover ? motionHover : noHover}
          className="h-full w-full object-cover"
          src={serviceData.image ?? "/images/service-images/nasledstvo.webp"}
          alt="pic"
        />
      </div>
      <motion.div
        animate={isHover ? imageHover : ""}
        className={"absolute z-[7] h-full w-full bg-[#000D8199] opacity-80"}
      />
      {/* prettier-ignore */}
      <div className={"absolute p-5 z-[8] h-full flex flex-col justify-between"}>
        <h4 className={" h-full w-full text-2xl font-bold text-my-white uppercase"}>
          <span className={"block w-full"}>{serviceData.title}</span>
        </h4>
        <span
          className={"block text-my-white first-letter:capitalize underline underline-offset-4"}
        >
        подробнее
      </span>
      </div>
    </div>
  );
};
