import React from "react";
import PropTypes from "prop-types";

import style from "./Main.css";
import Request from "../requset/Request";
import Response from "../respose/Response";

export default function Main({
  changeFormType,
  state,
  fetchResponse,
  setResponseJSON,
  setRequestJSON,
}) {
  return (
    <div className={style.main}>
      <div className={style.oneThird}>
        <h2>Запрос</h2>
        <Request
          changeFormType={changeFormType}
          fetchResponse={fetchResponse}
          setResponseJSON={setResponseJSON}
          state={state}
          setRequestJSON={setRequestJSON}
        />
      </div>
      <div className={style.twoThird}>
        <h2>Ответ</h2>
        <Response response={state.responseJSON} isLoading={state.isLoading} />
      </div>
    </div>
  );
}

Main.propTypes = {
  changeFormType: PropTypes.func,
  state: PropTypes.object,
  requestJSON: PropTypes.object,
  fetchResponse: PropTypes.func,
  setResponseJSON: PropTypes.func,
  setRequestJSON: PropTypes.func,
};
Main.defaultProps = {
  changeFormType: () => ({}),
  state: {},
  requestJSON: {},
  fetchResponse: () => ({}),
  setResponseJSON: () => ({}),
  setRequestJSON: () => ({}),
};
