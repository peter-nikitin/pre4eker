import React from "react";
import PropTypes from "prop-types";
import styleShared from "src/components/respose/responseShared.css";

const Contact = ({ label, main, pending, invalid, confirmed }) => (
  <>
    <div className={styleShared.name}>{label}</div>
    <div className={styleShared.inline}>
      <div className={styleShared.half}>
        <div className={styleShared.value}>{main}</div>

        {!invalid &&
          (invalid ? (
            <p className={`${styleShared.bad} ${styleShared.status}`}>
              Не валидный
            </p>
          ) : (
            <p className={`${styleShared.good} ${styleShared.status}`}>
              Валидный
            </p>
          ))}
        {confirmed &&
          (confirmed ? (
            <p className={`${styleShared.good} ${styleShared.status}`}>
              Подтвержден
            </p>
          ) : (
            <p className={`${styleShared.bad} ${styleShared.status}`}>
              Не подтвержден
            </p>
          ))}
      </div>

      {pending && pending > 0 && (
        <div className={styleShared.half}>
          <div className={styleShared.value}>{pending}</div>
          <p className={`${styleShared.bad} ${styleShared.status}`}>
            Ожидает подтверждения
          </p>
        </div>
      )}
    </div>
  </>
);

Contact.defaultProps = {
  label: "",
  main: "",
  pending: -1,
  invalid: false,
  confirmed: false,
};
Contact.propTypes = {
  label: PropTypes.string,
  main: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pending: PropTypes.number,
  invalid: PropTypes.bool,
  confirmed: PropTypes.bool,
};

export default Contact;
