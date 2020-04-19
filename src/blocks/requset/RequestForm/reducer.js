import request from "data/requestObj";

export const requestFormReducer = function (state = request, action) {
  switch (action.type) {
    case "SELECT_CUSTOMER":
      const { customer } = state;
      customer.selected = action.selected;
      return { ...state, customer };
    case "SELECT_ORDER_IDENTIFIER":
      const { order } = state;
      order.identifyer.selected = action.selected;
      return { ...state, order };
    case "ADD_CUSTOM_FIELD":
      const { customfields } = state.order;
      customfields.fields.push(1);
      return { ...state, customfields };
    default:
      return state;
  }
};
