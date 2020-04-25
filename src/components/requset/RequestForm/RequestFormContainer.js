import { connect } from "react-redux";

import RequestForm from "./RequestForm";

const mapStateToProps = ({ requestFormReducer }) => ({
  requestForm: requestFormReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeCustomerIdentifier: (option) =>
    dispatch({ type: "SELECT_CUSTOMER", selected: option }),
  changeOrderIdentifier: (option) =>
    dispatch({ type: "SELECT_ORDER_IDENTIFIER", selected: option }),
  addCF: () => dispatch({ type: "ADD_CUSTOM_FIELD" }),
  onInputChange: () => dispatch({ type: "SET_REQUEST_VALUE" }),
});

const RequestFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestForm);

export default RequestFormContainer;
