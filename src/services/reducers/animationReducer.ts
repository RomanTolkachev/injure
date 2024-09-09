import { SET_ANIMATED } from "../actions/animationActions";

export interface IAnimationReducer {
  shouldAnimate: boolean;
}
const initialState: IAnimationReducer = {
  shouldAnimate: true,
};

export const animationState = (
  state: IAnimationReducer = initialState,
  action: any,
) => {
  switch (action.type) {
    case SET_ANIMATED: {
      return {
        ...state,
        shouldAnimate: false,
      };
    }
    default: {
      return state;
    }
  }
};
