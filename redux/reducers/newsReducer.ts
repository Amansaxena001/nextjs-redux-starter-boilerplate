import { GET_NEWS } from "../Actions/action.types";

const initialState = {
  news: [],
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
