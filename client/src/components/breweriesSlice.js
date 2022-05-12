import { v4 as uuid } from "uuid";

// import { createSlice } from "@reduxjs/toolkit";

//Action creators
export const addBrewery = (brewery) => {
  return {
    type: "breweries/add",
    payload: brewery
  }
}

//Reducer
const initialState = [];

export default function breweriesReducer(state = initialState, action) {
  switch( action.type ) {
    case "breweries/add":
      return [...state, {
        id: uuid(),
        name: action.payload
      }]
    
    default:
        return state;
      }
}


// const breweriesSlice = createSlice({
//   name: "breweries",
//   initialState: {
//     entities: ["Fogtown"],
//   },
//   reducers: {
//     breweryAdded(state, action) {
//       state.entities.push(action.payload);
//     },
//   },
// });

// export const { breweryAdded } = breweriesSlice.actions;

// export default breweriesSlice.reducer;
