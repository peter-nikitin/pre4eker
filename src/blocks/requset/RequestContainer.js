import { connect } from "react-redux";

import Request from "./Request";


const mapStateToProps = ({ requestReducer }) => ({
  requestFromType: requestReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeFormType: (type) =>
      dispatch({ type: `CHANGE_REQUEST_FORM`, form: type }),
    setResponseJSON: (JSON) =>
      dispatch({ type: `SET_RESPONSE_JSON`, data: JSON }),
    setRequestJSON: (JSON) =>
      dispatch({ type: `SET_REQUEST_JSON`, data: JSON }),
  };
};

export const RequestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Request);
