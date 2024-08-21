import React, { FunctionComponent, ReactNode } from "react";
import { SocialMedia } from "./SocialMedia";

interface IAddress {
  className?: string;
  city?: string;
  address?: string | ReactNode;
  firstContact?: ReactNode;
  secondContact?: ReactNode;
  socialMediaComponent?: ReactNode;
}

export const Address: FunctionComponent<IAddress> = ({
  className,
  city = "город",
  address = (
    <div className="flex flex-col justify-center border-b-[1.5px] border-b-my-main-blue pb-3 text-news-preview tracking-tight text-my-gray sm:pb-5 sm:text-2xl lg:pb-12 lg:text-4xl">
      <span className="">Российская Федерация,</span>
      <span className="">Московская область,</span>
      <span className="">г. Мытищи, ул. Летняя</span>
      <span className="">строение 19, офис 9-18</span>
    </div>
  ),
  firstContact,
  secondContact,
  socialMediaComponent = <SocialMedia />,
}) => {
  return (
    <div className={`${className} flex flex-col first-letter:capitalize`}>
      <h4 className="mb-3 text-2xl font-semibold tracking-tight text-my-blue-dark first-letter:capitalize sm:mb-5 md:text-4xl lg:mb-10 lg:text-6xl">
        {city}
      </h4>
      {address}
      <div className="emails mb-3 flex w-full flex-col pt-3 sm:flex-row sm:gap-10 sm:pt-5 lg:justify-between lg:pt-12">
        {firstContact}
        {secondContact}
      </div>
      <div className="hidden sm:block">{socialMediaComponent}</div>
    </div>
  );
};
