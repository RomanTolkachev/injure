import {FunctionComponent, ReactNode} from "react";

interface IButtonMainProps {
    children: ReactNode
}

export const ButtonMain: FunctionComponent<IButtonMainProps> = ({children}) => {
    return (
        <button className="h-20 text-2xl font-bold text-white border-2 rounded-full border-white px-10 bg-my-blue-light hover:my-button-hover">
            {children}
        </button>
    )
}