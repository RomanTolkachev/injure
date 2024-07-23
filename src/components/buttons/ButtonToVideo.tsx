import {FunctionComponent, ReactNode} from "react";

interface IButtonToVideoProps {
    children: ReactNode
}

export const ButtonToVideo: FunctionComponent<IButtonToVideoProps> = ({children}) => {
    return (
        <button className="h-20 text-2xl font-bold text-white border-2 rounded-full border-white px-10 bg-my-blue-light hover:my-button-hover">
            {children}
        </button>
    )
}