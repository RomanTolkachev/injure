import React, { FunctionComponent } from "react";

interface IBrick {
  headerContent?: string;
  spanContent?: string | number;
  className?: string;
  email?: string;
  telephone?: string;
}
export const SmallHeaderAndInfoBrick: FunctionComponent<IBrick> = ({
  headerContent,
  spanContent,
  className,
  email = null,
  telephone = null,
}) => {
  return telephone ? (
    <div className={`${className} flex flex-col`}>
      <a
        className="sm:text-my-gray-header text-news-preview text-my-gray sm:text-sm sm:font-bold lg:mb-1"
        href={`mailto:${email}`}
      >
        {email}
      </a>
      <a className="text-2xl" href={`tel:${telephone}`}>
        {telephone}
      </a>
    </div>
  ) : (
    <div className={`${className}`}>
      <h5 className="sm:text-my-gray-header text-news-preview text-my-gray sm:text-sm sm:font-bold lg:mb-1">
        {headerContent}
      </h5>
      <span className="text-2xl">{spanContent}</span>
    </div>
  );
};
