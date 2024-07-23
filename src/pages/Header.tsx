import React, {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";
import {Sprite} from "../components/sprite";
import {ButtonHeader} from "../components/buttons/ButtonHeder";

export const Header: FunctionComponent = () => {
    return  (
        <header className="bg-my-main-blue p-1.5 h-[79px] fixed w-full border-b border-my-gray-medium">
            <div className="container flex h-full items-center gap-9 justify-between">
                <div className='h-2 w-20 flex items-center min-w-[120px]'>
                    <Sprite />
                </div>
                <nav className="shrink grow gap-8 max-w-[600px]">
                    <ul className="flex justify-between font-semibold text-my-white capitalize text-header-nav xl:text-lg">
                        <NavLink to={'/'}>
                            <li><ButtonHeader>главная</ButtonHeader></li>
                        </NavLink>
                        <NavLink to={'/about'} className={({isActive}): string => isActive ? 'active' : ''}>
                            <li><ButtonHeader>о нас</ButtonHeader>
                            </li></NavLink>
                        <NavLink to={'/services'}><li><ButtonHeader>услуги</ButtonHeader></li></NavLink>
                        <NavLink to={'/team'}><li><ButtonHeader>команда</ButtonHeader></li></NavLink>
                        <NavLink to={'/portfolio'}><li><ButtonHeader>портфолио</ButtonHeader></li></NavLink>
                        <NavLink to={'/contacts'}><li><ButtonHeader>контакты</ButtonHeader></li></NavLink>
                    </ul>
                </nav>
                <div className='bg-my-white rounded-full h-full flex items-center py-1 pl-5 pr-1 gap-3 text-my-main-blue text-xl'>
                    <a href="tel:123-456-7890" className="font-semibold text-header-nav">123-456-7890</a>
                    <button className="font-bold text-header-order text-nowrap bg-white rounded-full h-full px-6">оставить заявку</button>
                </div>
            </div>
        </header>
    )
}