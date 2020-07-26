import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import getFromLocalStorage from "src/helpers/getFromLocalStorage";
import saveToLocalStorage from "src/helpers/saveToLocalStorage";

import Input from "src/components/Input/Input";

import style from "./RequestSettings.css";

const RequestSettings = ({
  requestJSON,
  setRequestJSON,
  setResponseJSON,
  changeFormType,
  type,
}) => {
  const loadEndpointsFromLocalStorage = () => {
    const endpointsInLocalStorageString = getFromLocalStorage("endpoints");

    if (endpointsInLocalStorageString) {
      return endpointsInLocalStorageString.split(",");
    }
    return [];
  };
  const [endpointsInLocalStorage, handleEndpointsChange] = useState(
    loadEndpointsFromLocalStorage()
  );

  useEffect(() => {
    saveToLocalStorage("endpoints", endpointsInLocalStorage.join(","));
  }, [endpointsInLocalStorage]);

  const loadStateFromLocalStorage = (endpoint) => {
    const typeBeforeLoadLocalStorage = type;
    changeFormType("Loading");
    const stateFromLocalStorageString = getFromLocalStorage(endpoint);

    let stateFromLocalStorage;

    if (stateFromLocalStorageString) {
      stateFromLocalStorage = JSON.parse(stateFromLocalStorageString);
    }
    if (stateFromLocalStorage && stateFromLocalStorage.requestJSON) {
      setRequestJSON(stateFromLocalStorage.requestJSON);
    }
    if (stateFromLocalStorage && stateFromLocalStorage.responseJSON) {
      setResponseJSON(stateFromLocalStorage.responseJSON);
    }

    setTimeout(() => {
      changeFormType(typeBeforeLoadLocalStorage);
    }, 100);

    return "";
  };

  return (
    <div className={`${style.inline}`}>
      <Input
        label="Эндпоин"
        name="endpoint"
        className={style.third}
        onChange={(e) =>
          setRequestJSON({
            ...requestJSON,
            endpoint: e.target.value,
          })
        }
        onBlur={(e) => {
          if (e.target.value.length > 0) {
            const setOfLocalEndpoints = new Set(endpointsInLocalStorage);
            setOfLocalEndpoints.add(e.target.value);
            handleEndpointsChange([...setOfLocalEndpoints]);
          }
        }}
        value={requestJSON.endpoint}
        options={endpointsInLocalStorage}
        onOptionClick={(e) => {
          setRequestJSON({
            ...requestJSON,
            endpoint: e,
          });
          loadStateFromLocalStorage(e);
        }}
      />

      <Input
        label="Секретный ключ"
        name="key"
        value={requestJSON.key}
        className={style.third}
        onChange={(e) =>
          setRequestJSON({
            ...requestJSON,
            key: e.target.value,
          })
        }
        type="text"
      />
      <Input
        label="Операция"
        name="operation"
        className={style.third}
        onChange={(e) =>
          setRequestJSON({
            ...requestJSON,
            operation: e.target.value,
          })
        }
        value={requestJSON.operation}
      />
    </div>
  );
};

RequestSettings.propTypes = {
  requestJSON: PropTypes.object,
  setRequestJSON: PropTypes.func,
  setKey: PropTypes.func,
  keyValue: PropTypes.string,
};
RequestSettings.defaultProps = {
  requestJSON: {},
  setRequestJSON: () => ({}),
  setKey: () => ({}),
  keyValue: "",
};

export default RequestSettings;
