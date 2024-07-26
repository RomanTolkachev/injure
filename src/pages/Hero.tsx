import {CSSProperties, FunctionComponent, useEffect, useState} from "react";
import {images} from "../services/images";
import {ButtonToVideo} from "../components/buttons/ButtonToVideo";

export const Hero: FunctionComponent = () => {

    let [currentFemidaTransition, setFemidaTransition] = useState<number>(window.innerWidth > 600 ? 70 : 50);

    useEffect(() => {
        const handleWindowResize = () => {
            const newWidth = window.innerWidth;
            setFemidaTransition(newWidth > 600 ? 70 : 50);
        };
        window.addEventListener('resize', handleWindowResize)
        return () => {window.removeEventListener('resize', handleWindowResize)}
    }, [])

    const backGroundStyle: CSSProperties = {
        backgroundImage: `url(${images.main})`, backgroundPositionX: `${currentFemidaTransition}%`
    }

    return (
        <div className=" my-gradient overflow-hidden h-[calc(100svh-79px)] w-full">
            <div className="container bg-no-repeat min-h-[700px] w-full h-full bg-[length:auto_100%]" style={backGroundStyle}>
                <div className="hero-mask h-[calc(100svh-79px)] w-full left-0 absolute opacity-60 md:hidden z-[1]"></div>
                <div className="max-sm:translate-x-1/2 max-sm:right-1/2 sm:pl-4 md:pl-6 xl:pl-20 top-0 h-full absolute z-[2] flex items-center justify-center">
                    <div className="h-full flex flex-col max-sm:py-16 justify-center max-w-[400px] md:max-w-[480px] xl:max-w-[680px] tracking-tight ">
                        <h1 className="pl-4 max-sm:mt-auto text-hero-main-small-mobile sm:pl-0 sm:text-hero-main text-white mb-4 uppercase font-black">нам<br/> доверяют<br/> по
                            праву</h1>
                        <p className="px-4 sm:px-0 text-hero-legend text-white mb-10">Мы - юридическая компания «In
                            Jure», специализирующаяся на правовом сопровождении
                            бизнеса и на оказании помощи физическим лицам во всех регионах России.</p>
                        <div className='max-sm:mx-auto max-sm:mt-auto w-fit'>
                            <ButtonToVideo>смотреть видео</ButtonToVideo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}