import { DECREMENT, INCREMENT } from "../../actionsTypes/counterActionsTypes";

export const increaseValue = () => {
  return (dispatch) => {
    dispatch({
      type: INCREMENT,
    });
  };
};

export const decreaseValue = () => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT,
    });
  };
};
