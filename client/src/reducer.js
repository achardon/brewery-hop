import { combineReducers } from "redux";
import breweriesReducer from "./components/breweriesSlice";
import usersReducer from "./components/usersSlice";

export default combineReducers({
  breweries: breweriesReducer,
  users: usersReducer
});
