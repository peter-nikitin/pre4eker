import React from "react";
import style from "./EmptyResponse.css";

const EmptyResponse = (props) => {
  return (
    <div className={style.response}>
      <div className={style.text}>
        <p>Pre4eker - это сервис проверки и визуализации акций.</p>
        <ol>
          <li>Получи ответ АПИ Mindbox. Например, через Postman или от клиента</li>
          <li>Введи его в форму</li>
          <li>Проверь то, как настроены акции. </li>
        </ol>
        <p>github: <a href="https://github.com/peter-nikitin/mindbox-pre4eker">pre4eker</a></p>
      </div>
    </div>
  );
};

export default EmptyResponse;
