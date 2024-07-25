import React, {FunctionComponent} from "react";
import {IMenuItem} from "../services/utils/types";
import {NavMenuWide} from "./Header/NavMenuWide";
import {ButtonHeroOrder} from "./buttons/ButtonHeroOrder";
import {Logo} from "./Header/Logo";
import {BurgerButton} from "./buttons/BurgerButton";

const menuList: Array<IMenuItem> = [
    {path: "/", text: 'главная'},
    {path: "/about", text: 'о нас'},
    {path: "/services", text: 'услуги'},
    {path: "/team", text: 'команда'},
    {path: "/portfolio", text: 'портфолио'},
    {path: "/contacts", text: 'контакты'}
]

export const Header: FunctionComponent = () => {
    return  (
        <header className="bg-my-main-blue p-1.5 h-[79px] fixed w-full border-b border-my-gray-medium z-10">
            <div className="container flex h-full items-center gap-9 justify-between">
                <Logo />
                <NavMenuWide menuList={menuList}/>
                <ButtonHeroOrder telephone="123-456-7890">оставить заявку</ButtonHeroOrder>
                <BurgerButton />
            </div>
        </header>
    )
}