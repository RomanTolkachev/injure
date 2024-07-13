import React, {FunctionComponent} from "react";
import {NavLink, Route} from "react-router-dom";
import {Hero} from "./Hero";

export const Header: FunctionComponent = () => {
    return  (
        <header className="bg-my-main-blue h-[79px] fixed w-full">
            <div className="container">
                <nav>
                    <ul className="flex gap-4 container">
                        <NavLink to={'/'}>главная</NavLink>
                        <NavLink to={'/about'}>о нас</NavLink>
                        <NavLink to={'/services'}>услуги</NavLink>
                        <NavLink to={'/team'}>команда</NavLink>
                        <NavLink to={'/portfolio'}>портфолио</NavLink>
                        <NavLink to={'/contacts'}>контакты</NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    )
}