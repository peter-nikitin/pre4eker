// import { smallResponse } from "data/response";

import * as actionType from "./actionTypes";

const initialState = {
  type: "REQUEST_FORM",
  responseJSON: {},
  requestJSON: {},
  isLoading: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_REQUEST_FORM:
      return { ...state, type: action.form };
    case actionType.SET_RESPONSE_JSON:
      return { ...state, responseJSON: action.data };
    case actionType.SET_REQUEST_JSON:
      return { ...state, requestJSON: action.data };
    case actionType.TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};

export default mainReducer;
