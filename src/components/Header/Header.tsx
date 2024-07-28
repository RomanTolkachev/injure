import React, { FunctionComponent } from "react";
import { IMenuItem } from "../../services/utils/types";
import { NavMenuWide } from "./NavMenuWide";
import { ButtonHeroOrder } from "../buttons/ButtonHeroOrder";
import { Logo } from "./Logo";
import { BurgerButton } from "../buttons/BurgerButton";

const menuList: Array<IMenuItem> = [
  { path: "/", text: "главная" },
  { path: "/about", text: "о нас" },
  { path: "/services", text: "услуги" },
  { path: "/team", text: "команда" },
  { path: "/portfolio", text: "портфолио" },
  { path: "/contacts", text: "контакты" },
];

export const Header: FunctionComponent = () => {
  return (
    <header className="fixed z-10 h-[79px] w-full border-b border-my-gray-medium bg-my-main-blue p-1.5 max-sm:px-4">
      <div className="container flex h-full items-center justify-between gap-9">
        <Logo />
        <NavMenuWide menuList={menuList} />
        <ButtonHeroOrder telephone="123-456-7890">
          оставить заявку
        </ButtonHeroOrder>
        <BurgerButton />
      </div>
    </header>
  );
};
