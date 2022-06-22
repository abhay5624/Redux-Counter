import { combineReducers } from "redux";
import counterReducer from "./Counter";
import loggedReducer from "./Islogged";

const rootReducer = combineReducers({
  Counter: counterReducer,
  isLogged: loggedReducer,
});
export default rootReducer;
