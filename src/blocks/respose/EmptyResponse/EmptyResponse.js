import React from "react";
import style from "./EmptyResponse.css";

const EmptyResponse = (props) => {
  return (
    <div className={style.response}>
      <div className={style.text}>
        <p>Pre4eker - это сервис проверки акций. </p>
        <p>Вы можете:</p>
        <ol>
          <li>Сконфигурировать запрос в форме (скоро)</li>
          <li>Вставить запрос в формате JSON (скоро)</li>
          <li>Вставить ответ в формате JSON</li>
        </ol>
      </div>
    </div>
  );
};

export default EmptyResponse;
