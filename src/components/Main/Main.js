import React from "react";

import style from "./Main.css";
import Request from "../requset/Request";
import Response from "../respose/Response";

export default function Main(props) {
  return (
    <div className={style.main}>
      <div className={style.oneThird}>
        <h2>Запрос</h2>
        <Request {...props} />
      </div>
      <div className={style.twoThird}>
        <h2>Ответ</h2>
        <Response response={props.requestFrom.responseJSON} />
      </div>
    </div>
  );
}
