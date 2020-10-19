import { DECREMENT, INCREMENT } from "../../actionsTypes/counterActionsTypes";

export const increaseValue = () => {
  return {type: INCREMENT}
};

export const decreaseValue = () => {
  return {type: DECREMENT};
};
