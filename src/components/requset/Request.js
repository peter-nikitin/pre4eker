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
  fetchResponse,
  setResponseJSON,
  setResponseXML,
  setRequestJSON,
  setRequestXML,
  type,
  responseJSON,
  responseXML,
  requestJSON,
  requestXML,
}) => {
  const drawRequestForm = (selectedType) => {
    switch (selectedType) {
      case formTypes.requestForm.type:
        return (
          <div className={style.requestForm}>
            <RequestForm
              handleSubmit={fetchResponse}
              requestJSON={requestJSON}
              requestXML={requestXML}
              setRequestJSON={setRequestJSON}
            />
          </div>
        );
      case formTypes.requestJSON.type:
        return (
          <div className={style.requestJSON}>
            <CodeInput
              value={requestJSON}
              valueXML={requestXML}
              handleSubmit={fetchResponse}
              sendNewValue={setRequestJSON}
              handleXMLSubmit={setRequestXML}
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
              value={responseJSON}
              valueXML={responseXML}
              handleSubmit={setResponseJSON}
              handleXMLSubmit={setResponseXML}
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
          requestJSON={requestJSON}
        />
      </div>
      <div className={style.buttonLine}>
        {Object.keys(formTypes).map((button) => (
          <Button
            key={button}
            type="TEXT"
            action={() => changeFormType(formTypes[button].type)}
            size="sizeAuto"
            active={type === formTypes[button].type}
          >
            {formTypes[button].text}
          </Button>
        ))}
      </div>

      {drawRequestForm(type)}
    </div>
  );
};

Request.propTypes = {
  changeFormType: PropTypes.func,
  setResponseJSON: PropTypes.func,
  setResponseXML: PropTypes.func,
  fetchResponse: PropTypes.func,
  setRequestJSON: PropTypes.func,
  setRequestXML: PropTypes.func,
  type: PropTypes.string,
  responseJSON: PropTypes.object,
  responseXML: PropTypes.string,
  requestJSON: PropTypes.object,
  requestXML: PropTypes.string,
};
Request.defaultProps = {
  changeFormType: () => ({}),
  setResponseJSON: () => ({}),
  setResponseXML: () => ({}),
  fetchResponse: () => ({}),
  setRequestJSON: () => ({}),
  setRequestXML: () => ({}),
  type: "",
  responseJSON: {},
  responseXML: "",
  requestJSON: {},
  requestXML: "",
};

export default Request;
