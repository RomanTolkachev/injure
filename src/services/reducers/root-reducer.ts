import { combineReducers } from "@reduxjs/toolkit";
import { IMenuItem } from "../utils/types";
import { store } from "../../index";

export interface IAppState {
  modalContent: null | any;
  isBurgerActive: boolean;
  navList: Array<IMenuItem>;
}
const initialState = {
  modalContent: null,
  isBurgerActive: false,
  navList: [
    { path: "/", text: "главная" },
    {
      path: "/about",
      text: "о компании",
      BGItem: "/webp/sectionHeader/handShake.png",
    },
    { path: "/services", text: "услуги" },
    { path: "/team", text: "команда" },
    { path: "/portfolio", text: "портфолио" },
    { path: "/contacts", text: "контакты" },
  ],
};

export const appState = (
  state: IAppState = initialState,
  action: any,
): IAppState => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export type IRootState = ReturnType<typeof store.getState>;

export const rootReducer = combineReducers({
  app: appState,
});
