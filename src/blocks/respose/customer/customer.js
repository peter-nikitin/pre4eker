import React from "react";
import PropTypes from "prop-types";

import style from "./customer.css";
import Contact from "../Contact/Contact";
import statuses from './statuses'
import sexes from './sexes'


const Customer = ({ customer, ...props }) => {
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
    ianaTimeZone, 
    timeZoneSource
  } = customer;




  return (
    <div className={style.customer}>
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
      {mobilePhone && <Contact
        label='Мобильный телефон'
        main={mobilePhone}
        invalid={isMobilePhoneInvalid}
        confirmed={isMobilePhoneConfirmed}
        pending={pendingMobilePhone}
      />}
      {email && <Contact
        label='Email'
        main={email}
        invalid={isEmailInvalid}
        confirmed={isEmailConfirmed}
        pending={pendingEmail}
      />}

      
      <div className={style.inline}>
        {area && (
          <div className={style.half}>
            <div className={style.name}>Зона</div>
            <div className={style.value}>{area.name}</div>
            <p className={`${style.neutral} ${style.status}`}>{area.ids.externalId}</p>
          </div>
        )}
        {ianaTimeZone && (
          <div className={style.half}>
            <div className={style.name}>Часовой пояс</div>
            <div className={style.value}>{ianaTimeZone}</div>
            <p className={`${style.neutral} ${style.status}`}>{timeZoneSource}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Customer.propTypes = {
  customer: PropTypes.object,
};

export default Customer;
