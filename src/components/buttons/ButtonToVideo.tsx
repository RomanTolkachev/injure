import {FunctionComponent, ReactNode} from "react";

interface IButtonToVideoProps {
    children: ReactNode
}

export const ButtonToVideo: FunctionComponent<IButtonToVideoProps> = ({children}) => {
    return (
        <button className="block h-20 text-2xl font-bold lg:text-white bg-my-white text-my-blue-light lg:border-2 rounded-3xl lg:rounded-full border-white px-10 lg:bg-my-blue-light lg:hover:my-button-hover">
            {children}
        </button>
    )
}