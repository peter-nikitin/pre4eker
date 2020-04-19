import React, { Component } from "react";
import PropTypes from "prop-types";

import { RequestFormContainer } from "./RequestForm/RequestFormContainer";
import InputJSON from "./InputJSON/InputJSON";
import style from "./Request.css";
import Button from "src/blocks/Button/Button";
import Soon from "./Soon/Soon";

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
        return <Soon />;
      case `REQUEST_INPUT`:
        return <Soon />;
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
          active={requestFromType.type === `REQUEST_FORM`}
        >
          Форма запроса
        </Button>
        <Button
          type="TEXT"
          action={() => changeFormType(`REQUEST_INPUT`)}
          size="sizeAuto"
          active={requestFromType.type === `REQUEST_INPUT`}
        >
          JSON запроса
        </Button>
        <Button
          type="TEXT"
          action={() => changeFormType(`RESPONSE_INPUT`)}
          size="sizeAuto"
          active={requestFromType.type === `RESPONSE_INPUT`}
        >
          JSON ответа
        </Button>
      </div>
      <div className={style.request}>
        {drawRequesForm(requestFromType.type)}
      </div>
    </div>
  );
};

Request.propTypes = {};

export default Request;
