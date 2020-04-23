import { connect } from "react-redux";

import Request from "./Request";
import {changeFormType, setResponseJSON, setRequestJSON } from './actionCreators';

const mapStateToProps = ({ requestReducer }) => ({
  requestFrom: requestReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeFormType: (form) =>
      dispatch(changeFormType(form)),
    setResponseJSON: (JSON) =>
      dispatch(setResponseJSON(JSON)),
    setRequestJSON: (JSON) =>
      dispatch(setRequestJSON(JSON)),
  };
};

export const RequestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Request);
