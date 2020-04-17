import React, { Component } from "react";
import { connect } from "react-redux";

import Response from "./Response";

const mapStateToProps = ({ responseReducer, requestFormReducer}) => ({
  response: responseReducer,
  JSON: requestFormReducer
});

const mapDispatchToProps = {};

export const ResponseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Response);
