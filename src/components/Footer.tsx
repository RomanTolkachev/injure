import {FunctionComponent} from "react";
import {Logo} from "./Header/Logo";

export const Footer: FunctionComponent = () => {
    return (
        <div className="my-footer-gradient py-10 w-full">
            <div className="container grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-[auto_auto] text-white justify-center [&>*]:pl-5">
                <div className="max-md:text-center text-header-nav md:col-start-1">
                    <div className="w-28 mb-3 max-md:mx-auto"><Logo/></div>
                    <h4 className="text-nowrap text-2xl">Нам доверяют по праву!</h4>
                </div>
                <div className='max-md:text-center max-md:-mb-8 md:col-start-1 lg:col-start-2'>
                    <ul className="[&_li:not(:last-of-type)]:mb-2">
                        <li>Банкротство</li>
                        <li>Госзакупки и тендеры</li>
                        <li>Арбитражные споры</li>
                    </ul>
                </div>
                <div className='max-md:text-center lg:col-start-3'>
                    <ul className="[&_li:not(:last-of-type)]:mb-2">
                        <li>Антимонопольные споры</li>
                        <li>Защита по уголовным делам</li>
                        <li>Земля, строительство, недвижимость</li>
                        <li>Частным лицам</li>
                    </ul>
                </div>
                <div className='max-md:text-center font-bold md:col-start-1'>
                    injure@yahoo.com
                </div>
                <div className='max-md:text-center font-normal md:col-start-2 text-lg'>
                    Московская область, город Мытищи, улица Юбилейная, дом 24, квартира 181
                </div>
                <div className='max-md:text-center font-bold md:col-start-2 lg:col-start-3 flex flex-col text-footer-phone text-nowrap'>
                    <span>8-915-452-90-61</span>
                    <span>8-985-557-27-08</span>
                    <span className="text-header-nav">иконки соцсетей</span>
                </div>
            </div>
        </div>
    )
}