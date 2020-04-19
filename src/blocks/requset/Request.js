import React, { Component } from "react";
import PropTypes from "prop-types";

import { RequestFormContainer } from "./RequestForm/RequestFormContainer";
import InputJSON from "./InputJSON/InputJSON";
import style from "./Request.css";
import Button from "src/blocks/Button/Button";

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
        <Button
          type="TEXT"
          action={() => changeFormType(`REQUEST_FORM`)}
          size="sizeAuto"
        >
          Форма запроса
        </Button>
        <Button
          type="TEXT"
          action={() => changeFormType(`REQUEST_INPUT`)}
          size="sizeAuto"
        >
          JSON запроса
        </Button>
        <Button
          type="TEXT"
          action={() => changeFormType(`RESPONSE_INPUT`)}
          size="sizeAuto"
        >
          JSON ответа
        </Button>
      </div>
      {drawRequesForm(requestFromType.type)}
    </div>
  );
};

Request.propTypes = {};

export default Request;
