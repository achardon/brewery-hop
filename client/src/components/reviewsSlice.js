import { v4 as uuid } from "uuid";

//Action creators
export const addReview = (review) => {
  return {
    type: "reviews/add",
    payload: review,
  };
};

//Reducer
const initialState = [];

export default function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case "reviews/add":
      return [
        ...state, action.payload
      ];

    default:
      return state;
  }
}
