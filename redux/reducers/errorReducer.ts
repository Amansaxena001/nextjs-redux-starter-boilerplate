import { ERROR_NEWS } from "../Actions/action.types";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_NEWS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };

    default:
      return state;
  }
};
