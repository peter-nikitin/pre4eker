import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Loading from "src/components/Loading/Loading";

import Button from "src/components/Button/Button";
import Modal from "src/components/Modal/Modal";

import XMLInput from "src/components/requset/XMLInput/XMLInput";

import convertXML2JSON from "src/xml2json/xml2json";

import style from "./CodeInput.css";

const JSONInput = loadable(() => import("../JSONInput/JSONInput"), {
  fallback: <Loading />,
});

const CodeInput = ({
  value,
  valueXML,
  handleSubmit,
  sendNewValue,
  mainName,
  mainBtnText,
  type,
  handleXMLSubmit,
}) => {
  // const editor = useRef(null);

  const [localValue, handleLocalValueChange] = useState(
    JSON.stringify(
      typeof value.body !== "undefined" ? value.body : value,
      null,
      1
    )
  );
  const [localXml, handleLocalXmlChange] = useState(
    JSON.stringify(valueXML, null, 1)
  );
  const [isModalVisible, handleModalVisibleChange] = useState(false);

  const handleModalSubmit = (XMLString) => {
    try {
      const JSONFromXML = convertXML2JSON(XMLString);
      JSONFromXML.then((data) => handleLocalValueChange(data)).then(
        handleModalVisibleChange(!isModalVisible)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLocalValueChange(
      JSON.stringify(
        typeof value.body !== "undefined" ? value.body : value,
        null,
        1
      )
    );
    handleLocalXmlChange(JSON.stringify(valueXML, null, 1));
  }, [mainName]);

  useEffect(() => {
    try {
      if (
        type !== "Response" &&
        typeof localValue !== "undefined" &&
        localValue.length > 0
      ) {
        sendNewValue({
          ...value,
          body: JSON.parse(localValue),
        });
        handleXMLSubmit(localXml);
      }
    } catch (error) {
      console.log(error);
    }
  }, [localValue]);

  const handleSubmitBtnClick = () => {
    switch (type) {
      case "Response":
        handleSubmit({ ...JSON.parse(localValue) });
        handleXMLSubmit(localXml);
        break;
      case "Request":
        handleSubmit(value);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className={style.editorWrapper}>
        <JSONInput
          value={localValue}
          onChange={handleLocalValueChange}
          name={mainName}
        />
        <Button
          type="TEXT"
          size="sizeAuto"
          action={() => handleModalVisibleChange(!isModalVisible)}
          passedClassName={style.btnXML}
        >
          XML
        </Button>
      </div>

      <Button action={() => handleSubmitBtnClick()} type="TEXT" size="sizeFull">
        {mainBtnText}
      </Button>

      {isModalVisible && (
        <Modal
          header="Введите XML"
          main={() => (
            <XMLInput
              name={`${mainName}-xml`}
              value={localXml}
              handleBodyChange={(e) => handleLocalXmlChange(e)}
            />
          )}
          footer={() => (
            <Button
              action={() => handleModalSubmit(localXml)}
              type="TEXT"
              size="sizeFull"
            >
              Конвертировать XML в JSON
            </Button>
          )}
          onCloseBtnClick={() => handleModalVisibleChange(!isModalVisible)}
        />
      )}
    </>
  );
};

CodeInput.defaultProps = {
  sendNewValue: () => ({}),
  mainBtnText: "",
  valueXML: "",
};

CodeInput.propTypes = {
  value: PropTypes.object.isRequired,
  valueXML: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleXMLSubmit: PropTypes.func.isRequired,
  sendNewValue: PropTypes.func,
  mainName: PropTypes.string.isRequired,
  mainBtnText: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default CodeInput;
