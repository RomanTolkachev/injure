import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { IMenuItem } from "../../services/utils/types";
import { NavMenuWide } from "./NavMenuWide";
import { ButtonHeroOrder } from "../buttons/ButtonHeroOrder";
import { Logo } from "./Logo";
import { BurgerButton } from "../buttons/BurgerButton";
import { createPortal } from "react-dom";
import { Burger } from "./Burger";
import { Overlay } from "../utils/Overlay";

const menuList: Array<IMenuItem> = [
  { path: "/", text: "главная" },
  { path: "/about", text: "о нас" },
  { path: "/services", text: "услуги" },
  { path: "/team", text: "команда" },
  { path: "/portfolio", text: "портфолио" },
  { path: "/contacts", text: "контакты" },
];

export const Header: FunctionComponent = () => {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const [domReady, setDomReady] = React.useState(false);
  React.useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <header className="fixed z-10 h-[79px] w-full border-b border-my-gray-medium bg-my-main-blue p-1.5 max-sm:px-4">
      <div className="container flex h-full items-center justify-between gap-9">
        <Logo />
        <NavMenuWide menuList={menuList} />
        <ButtonHeroOrder telephone="123-456-7890">
          оставить заявку
        </ButtonHeroOrder>
        <div>{burgerOpen}</div>
        <BurgerButton burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
        <Burger burgerOpen={burgerOpen} />
        {domReady &&
          createPortal(
            <Overlay visible={burgerOpen} />,
            document.getElementById("portal") as HTMLElement,
          )}
      </div>
    </header>
  );
};
