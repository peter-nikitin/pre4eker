import React, { useEffect } from "react";
import PropTypes from "prop-types";
import saveToLocalStorage from "src/helpers/saveToLocalStorage";
import getFromLocalStorage from "src/helpers/getFromLocalStorage";

import style from "./Main.css";
import RequestContainer from "../requset/RequestContainer";
import Response from "../respose/Response";

export default function Main({ state }) {
  useEffect(() => {
    const endpointsInLocalStorageString = getFromLocalStorage("endpoints");
    let endpointsInLocalStorageArray = [];
    if (endpointsInLocalStorageString) {
      endpointsInLocalStorageArray = endpointsInLocalStorageString.split(",");
    }
    if (
      state.requestJSON.endpoint &&
      endpointsInLocalStorageArray.find(
        (item) => item === state.requestJSON.endpoint
      )
    ) {
      saveToLocalStorage(
        state.requestJSON.endpoint,
        JSON.stringify({
          ...state,
          requestJSON: { ...state.requestJSON, key: "" },
        })
      );
    }
  }, [state]);

  return (
    <div className={style.main}>
      <div className={style.oneThird}>
        <h2>Запрос</h2>
        <RequestContainer />
      </div>
      <div className={style.twoThird}>
        <h2>Ответ</h2>
        <Response response={state.responseJSON} isLoading={state.isLoading} />
      </div>
    </div>
  );
}

Main.propTypes = {
  state: PropTypes.object,
};
Main.defaultProps = {
  state: {},
};
