import { smallResponse } from "data/response";

import * as actionType from "./actionTypes";

const initialState = {
  type: "RESPONSE_INPUT",
  responseJSON: smallResponse,
  requestJSON: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_REQUEST_FORM:
      return { ...state, type: action.form };
    case actionType.SET_RESPONSE_JSON:
      return { ...state, responseJSON: action.data };
    case actionType.SET_REQUEST_JSON:
      return { ...state, requestJSON: action.data };
    default:
      return state;
  }
};

export default mainReducer;
