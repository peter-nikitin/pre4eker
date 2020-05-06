import React from "react";
import Loader from "react-loaders";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <Loader type="ball-scale-ripple-multiple" />
    </div>
  );
};

export default Loading;
