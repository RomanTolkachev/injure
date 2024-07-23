import React, {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";
import {ButtonHeader} from "../buttons/ButtonHeder";
import {IMenuItem} from "../../services/utils/types";


export const NavMenuWide: FunctionComponent<{menuList: Array<IMenuItem>}> = ({menuList}) => {
    return (
        <nav className="shrink grow gap-10 max-w-[600px] hidden lg:block">
            <ul className="flex justify-between font-semibold text-my-white capitalize text-header-nav xl:text-lg">
                {menuList.map(item => {
                    return (
                        <li>
                            <NavLink to={item.path}><ButtonHeader children={item.text}/></NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}