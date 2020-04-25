import request from "data/requestObj";

const requestFormReducer = (state = request, action) => {
  switch (action.type) {
    case "SELECT_CUSTOMER":
      return { ...state, customer: action.selected };
    case "SELECT_ORDER_IDENTIFIER":
      return { ...state, order: action.selected };
    case "ADD_CUSTOM_FIELD":
      return { ...state, customfields: [...state.customfields, 1] };
    default:
      return state;
  }
};

export default requestFormReducer;
