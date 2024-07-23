import {FunctionComponent, ReactNode} from "react";

interface IButtonHeader {
    children: ReactNode
}

export const ButtonHeader: FunctionComponent<IButtonHeader> = ({children}) => {
    return (
        <span className="nav">{children}</span>
    )
}

// relative before:content-[''] before:absolute before:block before:w-1/3 before:h-[1px]
// before:bottom-0 before:left-0 before:bg-my-white
// before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
// before:transition before:ease-in-out before:duration-300