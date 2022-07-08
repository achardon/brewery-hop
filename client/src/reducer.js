import { combineReducers } from "redux";
import breweriesReducer from "./components/breweriesSlice";
import reviewsReducer from "./components/reviewsSlice";
import usersReducer from "./components/usersSlice";
import wishesReducer from "./components/wishesSlice";

export default combineReducers({
  breweries: breweriesReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  wishes: wishesReducer
});
