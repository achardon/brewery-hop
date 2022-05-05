import { createSlice } from "@reduxjs/toolkit";

const breweriesSlice = createSlice({
  name: "breweries",
  initialState: {
    entities: ["Fogtown"],
  },
  reducers: {
    breweryAdded(state, action) {
      state.entities.push(action.payload);
    },
  },
});

export const { breweryAdded } = breweriesSlice.actions;

export default breweriesSlice.reducer;
