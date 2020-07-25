import React from "react";
import PropTypes from "prop-types";

import style from "./Main.css";
import RequestContainer from "../requset/RequestContainer";
import Response from "../respose/Response";

export default function Main({ state }) {
  return (
    <div className={style.main}>
      <div className={style.oneThird}>
        <h2>Запрос</h2>
        <RequestContainer />
      </div>
      <div className={style.twoThird}>
        <h2>Ответ</h2>
        <Response response={state.responseJSON} isLoading={state.isLoading} />
      </div>
    </div>
  );
}

Main.propTypes = {
  state: PropTypes.object,
};
Main.defaultProps = {
  state: {},
};
