//Action creators
export const addWish = (wish) => {
  return {
    type: "wishes/add",
    payload: wish
  }
}

export const removeWish = (wish) => {
  return {
    type: "wishes/remove",
    payload: wish.id,
  };
};

//Reducer
const initialState = [];

export default function wishesReducer(state = initialState, action) {
  switch (action.type) {
    case "wishes/add":
      if (state.find((wish) => wish.id === action.payload.id)) {
        return state;
      } else {
        return [...state, action.payload];
    }
    case "wishes/remove":
      return state.filter((wish) => wish.id !== action.payload);
    default:
      return state;
  }
}
