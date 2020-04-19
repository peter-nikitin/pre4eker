import React, { Component } from "react";
import PropTypes from "prop-types";

import { RequestFormContainer } from "./RequestForm/RequestFormContainer";
import InputJSON from "./InputJSON/InputJSON";
import style from "./Request.css";

const Request = (props) => {
  const {
    changeFormType,
    requestFromType,
    setRequestJSON,
    setResponseJSON,
  } = props;

  const drawRequesForm = (type) => {
    switch (type) {
      case `REQUEST_FORM`:
        return <RequestFormContainer />;
      case `REQUEST_INPUT`:
        return <InputJSON setJSON={setRequestJSON} />;
      case `RESPONSE_INPUT`:
        return <InputJSON setJSON={setResponseJSON} />;

      default:
        break;
    }
  };

  return (
    <div>
      <div className={style.buttonLine}>
        <button onClick={() => changeFormType(`REQUEST_FORM`)}>
          Форма запроса
        </button>
        <button onClick={() => changeFormType(`REQUEST_INPUT`)}>
          JSON запроса
        </button>
        <button onClick={() => changeFormType(`RESPONSE_INPUT`)}>
          JSON ответа
        </button>
      </div>
      {drawRequesForm(requestFromType.type)}
    </div>
  );
};

Request.propTypes = {};

export default Request;
