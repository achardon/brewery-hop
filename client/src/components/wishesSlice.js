//Action creators
export const addWish = (wish) => {
  return {
    type: "wishes/add",
    payload: wish
    // {
    //   id: wish.id,
    //   brewery: wish.brewery,
    //   user: wish.user
    // }
  }
}

export const removeWish = (wish) => {
  console.log('here')
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
      console.log('adding wishes')
      if (state.find((wish) => wish.id === action.payload.id)) {
        return state;
      } else {
        return [...state, action.payload];
    }
    case "wishes/remove":
      console.log(state)
      console.log(action.payload)
      return state.filter((wish) => wish.id !== action.payload);
    default:
      return state;
  }
}
