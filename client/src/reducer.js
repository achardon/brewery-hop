import { combineReducers } from "redux";
import breweriesReducer from "./components/breweriesSlice";
import reviewsReducer from "./components/reviewsSlice";
import usersReducer from "./components/usersSlice";

export default combineReducers({
  breweries: breweriesReducer,
  reviews: reviewsReducer,
  users: usersReducer
});
