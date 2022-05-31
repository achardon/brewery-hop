import { v4 as uuid } from "uuid";

//Action creators
export const addReview = (review) => {
  return {
    type: "reviews/add",
    payload: {
      id: review.id,
      comment: review.comment,
      user_id: review.user_id,
      brewery_id: review.brewery_id,
    },
  };
};

export const removeAllReviews = (review) => {
  return {
    type: "reviews/remove",
    payload: review,
  };
};


//Reducer
const initialState = [];

export default function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case "reviews/add":
        if (state.find(review => review.id === action.payload.id)) {
            return state
        }
        else {
            return [
              ...state, action.payload
            ];
        }
    case "reviews/remove":
      return [];
    default:
      return state;
  }
}
