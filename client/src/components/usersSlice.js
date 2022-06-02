import { v4 as uuid } from "uuid";

//Action creators
export const addUser = (user) => {
  return {
    type: "users/add",
    payload: user,
  };
};

export const removeUser = (user) => {
    return {
        type: "users/remove",
        payload: user.id
    }
}

//Reducer
const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/add":
      return {
          id: action.payload.id,
          email: action.payload.email,
        }
      
    case "users/remove":
      return {}

    default:
      return state;
  }
}
