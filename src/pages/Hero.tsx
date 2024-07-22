import {FunctionComponent, useEffect, useState} from "react";
import {images} from "../services/images";

export const Hero: FunctionComponent = () => {

    let [currentFemidaTransition, setFemidaTransition] = useState<number>(window.innerWidth > 600 ? 80 : 40);

    useEffect(() => {
        const handleWindowResize = () => {
            const newWidth = window.innerWidth;
            setFemidaTransition(newWidth > 600 ? 80 : 60);
        };
        window.addEventListener('resize', handleWindowResize)
        return () => {window.removeEventListener('resize', handleWindowResize)}
    }, [])

    const backGroundStyle = {
        backgroundImage: `url(${images.main})`, backgroundPositionX: `${currentFemidaTransition}%`
    }

    return (
        <div className="my-gradient overflow-hidden h-[calc(100svh-79px)] w-full">
            <div className="bg-no-repeat h-full bg-[length:auto_100%]" style={backGroundStyle}>
                <div className="container"></div>
            </div>
        </div>
    )
}