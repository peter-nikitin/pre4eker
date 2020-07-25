import React from "react";
import PropTypes from "prop-types";

import Button from "src/components/Button/Button";
import style from "./Modal.css";

const Modal = ({ header, footer, main, onCloseBtnClick }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.body}>
        <div className={style.header}>
          {header}
          <Button className={style.close} type="CROSS" action={onCloseBtnClick}>
            Закрыть
          </Button>
        </div>
        <div className={style.main}>{main()}</div>
        <div className={style.footer}>{footer()}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  footer: PropTypes.func.isRequired,
  main: PropTypes.func.isRequired,
  onCloseBtnClick: PropTypes.func.isRequired,
};

export default Modal;
