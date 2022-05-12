// import { configureStore } from "@reduxjs/toolkit";

// import breweriesReducer from "./components/breweriesSlice";

// const store = configureStore({
//   reducer: {
//     breweries: breweriesReducer,
//   },
// });

// export default store;

import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
