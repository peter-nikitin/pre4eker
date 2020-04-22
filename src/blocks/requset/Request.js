import React, { Component } from "react";
import PropTypes from "prop-types";

import { RequestFormContainer } from "./RequestForm/RequestFormContainer";
import InputJSON from "./InputJSON/InputJSON";
import style from "./Request.css";
import Button from "src/blocks/Button/Button";
import Soon from "./Soon/Soon";
import * as formTypes from "./formTypes";

const Request = (props) => {
  const {
    changeFormType,
    requestFromType,
    setRequestJSON,
    setResponseJSON,
  } = props;

  const drawRequesForm = (type) => {
    switch (type) {
      case formTypes.requestForm.type:
        return (
          <div className={style.requestForm}>
            <Soon />
          </div>
        );
      case formTypes.reqiestJSON.type:
        return (
          <div className={style.requestForm}>
            <Soon />
          </div>
        );
      case formTypes.responseJSON.type:
        return (
          <div className={style.requestJSON}>
            <InputJSON setJSON={setResponseJSON} />
          </div>
        );

      default:
        break;
    }
  };

  const buttons = [];

  return (
    <div>
      <div className={style.buttonLine}>
        {Object.keys(formTypes).map((button, i) => (
          <Button
            key={`button_${i}`}
            type="TEXT"
            action={() => changeFormType(formTypes[button].type)}
            size="sizeAuto"
            active={requestFromType.type === formTypes[button].type}
          >
            {formTypes[button].text}
          </Button>
        ))}
      </div>
      {drawRequesForm(requestFromType.type)}
    </div>
  );
};

Request.propTypes = {};

export default Request;
