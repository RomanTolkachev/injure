import {
  TypedUseSelectorHook,
  // useDispatch,
  useSelector as selectorHook,
} from "react-redux";
import { IRootState } from "../reducers/root-reducer";
// import { TAppDispatch } from "../utils/types";

export const useSelectorTyped: TypedUseSelectorHook<IRootState> = selectorHook;
// export const useDispatchTyped = () => useDispatch<any>(); // заменить на TAppDispatch
