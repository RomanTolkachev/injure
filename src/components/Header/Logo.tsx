import React, {FunctionComponent} from "react";
import {Sprite} from "../sprite";

export const Logo: FunctionComponent = () => {
    return (
        <div className='h-2 w-20 flex items-center min-w-[120px]'>
            <Sprite/>
        </div>
    )
}