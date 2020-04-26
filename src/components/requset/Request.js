import React from "react";
import PropTypes from "prop-types";

import Button from "src/components/Button/Button";
import ResponseJSON from "./ResponseJSON/ResponseJSON";
import RequestJSON from "./RequestJSON/RequestJSON";
import style from "./Request.css";
import Soon from "./Soon/Soon";
import * as formTypes from "./formTypes";

const Request = ({
  changeFormType,
  requestFrom,
  fetchResponse,
  setResponseJSON,
}) => {
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
          <div className={style.requestJSON}>
            <RequestJSON
              onSubmit={fetchResponse}
              data={requestFrom.requestJSON}
            />
          </div>
        );
      case formTypes.responseJSON.type:
        return (
          <div className={style.requestJSON}>
            <ResponseJSON
              setJSON={setResponseJSON}
              responseJSON={requestFrom.responseJSON}
            />
          </div>
        );

      default:
        return true;
    }
  };

  return (
    <div>
      <div className={style.buttonLine}>
        {Object.keys(formTypes).map((button) => (
          <Button
            key={button}
            type="TEXT"
            action={() => changeFormType(formTypes[button].type)}
            size="sizeAuto"
            active={requestFrom.type === formTypes[button].type}
          >
            {formTypes[button].text}
          </Button>
        ))}
      </div>
      {drawRequesForm(requestFrom.type)}
    </div>
  );
};

Request.propTypes = {
  changeFormType: PropTypes.func,
  requestFrom: PropTypes.object,
  setResponseJSON: PropTypes.func,
  fetchResponse: PropTypes.func,
};
Request.defaultProps = {
  changeFormType: () => ({}),
  requestFrom: {},
  setResponseJSON: () => ({}),
  fetchResponse: () => ({}),
};

export default Request;
