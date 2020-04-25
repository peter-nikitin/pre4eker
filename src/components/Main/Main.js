import React from "react";
import PropTypes from "prop-types";

import style from "./Main.css";
import Request from "../requset/Request";
import Response from "../respose/Response";

export default function Main({
  changeFormType,
  requestFrom,
  setRequestJSON,
  setResponseJSON,
}) {
  fetch("/express_backend")
    .then((resp) => resp.json())
    .then((data) => console.log(data));

  return (
    <div className={style.main}>
      <div className={style.oneThird}>
        <h2>Запрос</h2>
        <Request
          changeFormType={changeFormType}
          setRequestJSON={setRequestJSON}
          setResponseJSON={setResponseJSON}
          requestFrom={requestFrom}
        />
      </div>
      <div className={style.twoThird}>
        <h2>Ответ</h2>
        <Response response={requestFrom.responseJSON} />
      </div>
    </div>
  );
}

Main.propTypes = {
  changeFormType: PropTypes.func,
  requestFrom: PropTypes.object,
  setRequestJSON: PropTypes.func,
  setResponseJSON: PropTypes.func,
};
Main.defaultProps = {
  changeFormType: () => ({}),
  requestFrom: {},
  setRequestJSON: () => ({}),
  setResponseJSON: () => ({}),
};
