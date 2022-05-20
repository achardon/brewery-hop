import { v4 as uuid } from "uuid";

//Action creators
export const addUser = (user) => {
  return {
    type: "user/add",
    payload: user,
  };
};

//Reducer
const initialState = [];

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/add":
      return [
        ...state,
        {
          id: action.payload.id,
          email: action.payload.email
        },
      ];

    default:
      return state;
  }
}
