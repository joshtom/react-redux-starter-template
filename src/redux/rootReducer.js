import { combineReducers } from "redux";

import loading from "./reducers/testReducer";
import counterReducer from "./reducers/counterReducer";

const RootReducer = combineReducers({
  loading,
  counter: counterReducer,
});

export default RootReducer;
