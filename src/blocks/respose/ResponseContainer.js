import React, { Component } from "react";
import { connect } from "react-redux";

import Response from "./Response";

const mapStateToProps = ({ requestReducer}) => ({
  response: requestReducer.responseJSON
});

const mapDispatchToProps = {};

export const ResponseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Response);
