import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

import Button from "src/components/Button/Button";
import RequestSettings from "./RequestSettings/RequestSettings";

import style from "./Request.css";
import * as formTypes from "./formTypes";

const CodeInput = loadable(() => import("./CodeInput/CodeInput"));
const RequestForm = loadable(() => import("./RequestForm/RequestForm"));

const Request = ({
  changeFormType,
  state,
  fetchResponse,
  setResponseJSON,
  setRequestJSON,
}) => {
  const drawRequestForm = (type) => {
    switch (type) {
      case formTypes.requestForm.type:
        return (
          <div className={style.requestForm}>
            <RequestForm
              handleSubmit={fetchResponse}
              requestJSON={state.requestJSON}
              setRequestJSON={setRequestJSON}
            />
          </div>
        );
      case formTypes.requestJSON.type:
        return (
          <div className={style.requestJSON}>
            <CodeInput
              value={state.requestJSON}
              handleSubmit={fetchResponse}
              sendNewValue={setRequestJSON}
              mainName="RequestCode"
              mainBtnText="Рассчитать скидки"
              type="Request"
            />
          </div>
        );
      case formTypes.responseJSON.type:
        return (
          <div className={style.requestJSON}>
            <CodeInput
              value={state.responseJSON}
              handleSubmit={setResponseJSON}
              mainName="ResponseCode"
              mainBtnText="Отобразить скидки"
              type="Response"
            />
          </div>
        );

      default:
        return true;
    }
  };

  return (
    <div className={style.leftPanel}>
      <div className={`${style.formGroup}`}>
        <RequestSettings
          setRequestJSON={setRequestJSON}
          requestJSON={state.requestJSON}
        />
      </div>
      <div className={style.buttonLine}>
        {Object.keys(formTypes).map((button) => (
          <Button
            key={button}
            type="TEXT"
            action={() => changeFormType(formTypes[button].type)}
            size="sizeAuto"
            active={state.type === formTypes[button].type}
          >
            {formTypes[button].text}
          </Button>
        ))}
      </div>

      {drawRequestForm(state.type)}
    </div>
  );
};

Request.propTypes = {
  changeFormType: PropTypes.func,
  state: PropTypes.object,
  setResponseJSON: PropTypes.func,
  fetchResponse: PropTypes.func,
  setRequestJSON: PropTypes.func,
};
Request.defaultProps = {
  changeFormType: () => ({}),
  state: {},
  setResponseJSON: () => ({}),
  fetchResponse: () => ({}),
  setRequestJSON: () => ({}),
};

export default Request;
