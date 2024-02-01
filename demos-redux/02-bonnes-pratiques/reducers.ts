import { INCREMENT_LIKES, UPDATE_NAME } from "./constants";

const initialState = {
  name: 'Romain',
  likes: 10,
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT_LIKES:
      return {
        ...state,
        likes: state.likes + 1,
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}