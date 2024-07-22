import React, {FunctionComponent} from "react";
import {NavLink, Route} from "react-router-dom";
import {Hero} from "./Hero";
import {Sprite} from "../components/sprite";
import {ButtonHeader} from "../components/buttons/ButtonHeder";

export const Header: FunctionComponent = () => {
    return  (
        <header className="bg-my-main-blue p-1.5 h-[79px] fixed w-full border-b border-my-gray-medium">
            <div className="container flex h-full items-center gap-9 justify-between">
                <div className='h-2 w-20 flex items-center'>
                    <Sprite />
                </div>
                <nav>
                    <ul className="flex gap-9 container font-semibold text-my-white capitalize">
                        <NavLink to={'/'}><li><ButtonHeader>главная</ButtonHeader></li></NavLink>
                        <NavLink to={'/about'}><li><ButtonHeader>о нас</ButtonHeader></li></NavLink>
                        <NavLink to={'/services'}><li><ButtonHeader>услуги</ButtonHeader></li></NavLink>
                        <NavLink to={'/team'}><li><ButtonHeader>команда</ButtonHeader></li></NavLink>
                        <NavLink to={'/portfolio'}><li><ButtonHeader>портфолио</ButtonHeader></li></NavLink>
                        <NavLink to={'/contacts'}><li><ButtonHeader>контакты</ButtonHeader></li></NavLink>
                    </ul>
                </nav>
                <div className='bg-my-white rounded-full h-full flex items-center px-5 gap-3 text-my-main-blue text-xl'>
                    <a href="tel:123-456-7890" className="font-semibold">123-456-7890</a>
                    <button className="font-bold text-2xl ">оставить заявку</button>
                </div>
            </div>
        </header>
    )
}