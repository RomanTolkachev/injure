import React, {FunctionComponent} from "react";
import {Sprite} from "../sprite";

export const Logo: FunctionComponent = () => {
    return (
        <div className=' flex items-center min-w-[120px]'>
            <Sprite/>
        </div>
    )
}