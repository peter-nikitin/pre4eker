import { connect } from "react-redux";

import Request from "./Request";


const mapStateToProps = ({ requestFormReducer }) => ({
  requestFromType: requestFormReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeFormType: (type) =>
      dispatch({ type: `CHANGE_REQUEST_FORM`, form: type }),
    setResponseJSON: (JSON) =>
      dispatch({ type: `SET_RESPONSE_JSON`, JSON: JSON }),
    setRequestJSON: (JSON) =>
      dispatch({ type: `SET_REQUEST_JSON`, JSON: JSON }),
  };
};

export const RequestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Request);
