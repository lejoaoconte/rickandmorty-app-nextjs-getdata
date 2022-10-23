import { combineReducers } from "redux";
import { characterReducer } from "./characters";

const rootReducer = combineReducers({
  character: characterReducer,
});

export default rootReducer;
