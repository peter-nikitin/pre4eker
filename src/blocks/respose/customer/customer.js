import React from "react";
import PropTypes from "prop-types";
import style from "./customer.css";

const customer = ({ customer, ...props }) => {
  const {
    processingStatus,
    sex,
    birthDate,
    mobilePhone,
    pendingMobilePhone,
    isMobilePhoneInvalid,
    isMobilePhoneConfirmed,
    email,
    isEmailInvalid,
    isEmailConfirmed,
    pendingEmail,
    area,

  } = customer;
  const statuses = {
    Unavailable: "Не доступно",
    Found: "Найден",
    NotFound: "Не доступно",
    DiscountCardIsBlocked: "Дисконтная карта заблокирована",
  };

  const sexes = {
    male: "Мужской",
    fameal: "Женский",
  };

  return (
    <div>
      <div className={style.inline}>
        <div className={style.half}>
          <div className={style.name}>ФИО</div>
          <div className={style.value}>
            {`${customer.firstName} ${customer.middleName} ${customer.lastName}`}
          </div>
        </div>
        <div className={style.half}>
          <div className={style.name}>Статус обработки</div>
          <div className={style.value}>
            {statuses[processingStatus] || processingStatus}
          </div>
        </div>
      </div>
      <div className={style.inline}>
        <div className={style.half}>
          <div className={style.name}>Пол</div>
          <div className={style.value}>{sexes[sex]}</div>
        </div>
        <div className={style.half}>
          <div className={style.name}>Дата рождения</div>
          <div className={style.value}>{birthDate}</div>
        </div>
      </div>
      <div className={style.inline}>
        <div className={style.name}>Телефон</div>
        <div className={style.half}>
          <div className={style.value}>{mobilePhone}</div>

          {isMobilePhoneInvalid && isMobilePhoneInvalid ? (
            <p className={style.bad}>Не валидный </p>
          ) : (
            <p className={style.good}>Валидный </p>
          )}
          {isMobilePhoneConfirmed && isMobilePhoneConfirmed ? (
            <p className={style.good}>Подтвержден </p>
          ) : (
            <p className={style.bad}>Не подтвержден </p>
          )}
        </div>

        {pendingMobilePhone && (
          <div className={style.half}>
            <div className={style.value}>{pendingMobilePhone}</div>
            <p className={style.bad}>Ожидает подтверждения </p>
          </div>
        )}
      </div>
      <div className={style.inline}>
        <div className={style.name}>Email</div>
        <div className={style.half}>
          <div className={style.value}>{email}</div>

          {isEmailInvalid && isEmailInvalid ? (
            <p className={style.bad}>Не валидный </p>
          ) : (
            <p className={style.good}>Валидный </p>
          )}
          {isEmailConfirmed && isEmailConfirmed ? (
            <p className={style.good}>Подтвержден </p>
          ) : (
            <p className={style.bad}>Не подтвержден </p>
          )}
        </div>

        {pendingEmail && (
          <div className={style.half}>
            <div className={style.value}>{pendingEmail}</div>
            <p className={style.bad}>Ожидает подтверждения </p>
          </div>
        )}
      </div>
      <div className={style.inline}>
       { area && <div className={style.half}>
          <div className={style.name}>Зона</div>
          <div className={style.value}>{area.name}</div>
          <p>{area.ids.externalId}</p>
        </div>}
       
      </div>
    </div>
  );
};

customer.propTypes = {
  customer: PropTypes.object,
};

export default customer;
