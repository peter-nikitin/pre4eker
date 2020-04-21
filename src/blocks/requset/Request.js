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

  const REQUSET_FORM_TYPE = {
    requestForm: {
      type: "REQUEST_FORM",
      text: "Форма запроса",
      component: <Soon />,
    },
    reqiestJSON: {
      type: "REQUEST_INPUT",
      text: "JSON запроса",
      component: <Soon />,
    },
    responseJSON: {
      type: "RESPONSE_INPUT",
      text: "JSON ответа",
      component: <InputJSON setJSON={setResponseJSON} />,
    },
  };

  const drawRequesForm = (type) => {
    switch (type) {
      case REQUSET_FORM_TYPE.requestForm.type:
        return REQUSET_FORM_TYPE.requestForm.component;
      case REQUSET_FORM_TYPE.reqiestJSON.type:
        return REQUSET_FORM_TYPE.reqiestJSON.component;
      case REQUSET_FORM_TYPE.responseJSON.type:
        return REQUSET_FORM_TYPE.responseJSON.component;

      default:
        break;
    }
  };

  const buttons = [];

  return (
    <div>
      <div className={style.buttonLine}>
        {Object.keys(REQUSET_FORM_TYPE).map((button, i) => (
          <Button
            key={`button_${i}`}
            type="TEXT"
            action={() => changeFormType(REQUSET_FORM_TYPE[button].type)}
            size="sizeAuto"
            active={requestFromType.type === REQUSET_FORM_TYPE[button].type}
          >
            {REQUSET_FORM_TYPE[button].text}
          </Button>
        ))}
      </div>
      <div className={requestFromType.type === REQUSET_FORM_TYPE.requestForm.type ? style.requestForm : style.requestJSON}>
        {drawRequesForm(requestFromType.type)}
      </div>
    </div>
  );
};

Request.propTypes = {};

export default Request;
