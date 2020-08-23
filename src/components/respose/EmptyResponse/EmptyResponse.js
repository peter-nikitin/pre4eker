import React from "react";
import logo from "src/assets/logo.svg";
import style from "./EmptyResponse.css";

const EmptyResponse = () => (
  <div className={style.response}>
    <div className={style.text}>
      <p>
        <img src={logo} alt="" />
      </p>
      <p>Визуализация акций</p>
    </div>
    <div className={style.inline}>
      <div className={style.text}>
        <div>
          <h3>Расчет и визуализация </h3>
          <p>
            Чтобы рассчитать акции, сервис выполняет запрос{" "}
            <a href="https://developers.mindbox.ru/docs/processing-calculate">
              {" "}
              "Предварительный расчет заказа"
            </a>{" "}
            к API Mindbox.
          </p>
          <p>Для расчета надо: </p>
          <ol>
            <li>
              Заполнить настройки подключения: эндпоинт, секретный ключ и
              операция
            </li>
            <li>Собрать тело запроса</li>
          </ol>
          <p>
            Тело можно собрать через форму-конструктор или вставить готовый JSON
            на вкладке "тело запроса".
          </p>
          <p>Полученный ответ отобразится в виде блоков.</p>
        </div>
      </div>
      <div className={style.text}>
        <h3>Только визуализация</h3>
        <p>
          Если у вас есть расчитанные акции, то вставьте их на вкладке "тело
          ответа".
        </p>
        <p> Заполнять настройки подключения не нужно.</p>
      </div>
    </div>
    <div className={style.text}>
      <h4>Если у вас есть XML</h4>
      <p>
        API Mindbox работает c XML и JSON. Но сервис внутри себя использует
        только JSON.
      </p>
      <p>
        Поэтому, если у вас есть тело запроса или ответа в формате XML, то его
        можно вставить на нужной вкладке. После сохранения произойдет
        конвертация в JSON.
      </p>
    </div>
    <div className={style.text}>
      <p>
        github: 
        <a href="https://github.com/peter-nikitin/mindbox-pre4eker">pre4eker</a>
      </p>
    </div>
  </div>
);

export default EmptyResponse;
