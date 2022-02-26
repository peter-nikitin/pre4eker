import React from "react";
import PropTypes from "prop-types";

import Button from "src/components/Button/Button";

import Customer from "../Customer/Customer";
import Order from "../Order/Order";
import Lines from "../Lines/Lines";

import style from "./RequestForm.css";

const RequestForm = ({ requestJSON, handleSubmit, setRequestJSON }) => {
  return (
    <>
      <div className={style.form}>
        {/* <div className={`${style.formGroup}`}>
          <RequestSettings
            setRequestJSON={setRequestJSON}
            requestJSON={requestJSON}
            setKey={setKey}
            keyValue={key}
          />
        </div> */}
        <div className={`${style.formGroup}`}>
          <Customer setRequestJSON={setRequestJSON} requestJSON={requestJSON} />
        </div>
        <div className={`${style.formGroup}`}>
          <Order setRequestJSON={setRequestJSON} requestJSON={requestJSON} />
        </div>
        <div className={`${style.formGroup}`}>
          <Lines setRequestJSON={setRequestJSON} requestJSON={requestJSON} />
        </div>
      </div>
      <Button
        action={() =>
          handleSubmit({
            ...requestJSON,
          })
        }
        type="TEXT"
        size="sizeFull"
      >
        Рассчитать скидки
      </Button>
    </>
  );
};

RequestForm.defaultProps = {
  requestJSON: {},
};

RequestForm.propTypes = {
  requestJSON: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  setRequestJSON: PropTypes.func.isRequired,
};
export default RequestForm;
