import { combineReducers } from "redux";
import breweriesReducer from "./components/breweriesSlice";

export default combineReducers({
  breweries: breweriesReducer,
});
