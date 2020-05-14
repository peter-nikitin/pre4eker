import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

import Button from "src/components/Button/Button";

import style from "./Request.css";
import Soon from "./Soon/Soon";
import * as formTypes from "./formTypes";

const ResponseJSON = loadable(() => import("./ResponseJSON/ResponseJSON"));
const RequestJSON = loadable(() => import("./RequestJSON/RequestJSON"));
const RequestForm = loadable(() => import("./RequestForm/RequestForm"));

const Request = ({
  changeFormType,
  state,
  fetchResponse,
  setResponseJSON,
  setRequestJSON,
}) => {
  const drawRequesForm = (type) => {
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
      case formTypes.reqiestJSON.type:
        return (
          <div className={style.requestJSON}>
            <RequestJSON
              handleSubmit={fetchResponse}
              requestJSON={state.requestJSON}
              setRequestJSON={setRequestJSON}
            />
          </div>
        );
      case formTypes.responseJSON.type:
        return (
          <div className={style.requestJSON}>
            <ResponseJSON
              setJSON={setResponseJSON}
              responseJSON={state.responseJSON}
            />
          </div>
        );

      default:
        return true;
    }
  };

  return (
    <div className={style.leftPanel}>
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
      {drawRequesForm(state.type)}
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
