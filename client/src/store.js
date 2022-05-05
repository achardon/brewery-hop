import { configureStore } from "@reduxjs/toolkit";

import breweriesReducer from "./components/breweriesSlice";

const store = configureStore({
  reducer: {
    breweries: breweriesReducer,
  },
});

export default store;
