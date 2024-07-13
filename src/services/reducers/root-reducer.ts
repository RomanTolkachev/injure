import {combineReducers} from "@reduxjs/toolkit";

interface IAppState {
    modalContent: null | any,
    isBurgerActive: boolean
}
const initialState = {
    modalContent: null,
    isBurgerActive: false,
}
const appState = (state: IAppState = initialState, action: any): IAppState => {
    switch (action.type) {
        default: {
            return state
        }
    }
}

export const rootReducer = combineReducers({
    app: appState
})
