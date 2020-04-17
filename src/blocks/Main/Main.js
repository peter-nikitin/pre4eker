import React from "react";

import style from "./Main.css";
import { RequestContainer } from "../requset/RequestContainer";
import { ResponseContainer } from "../respose/ResponseContainer";

export default function Main(props) {
  return (
    <div className={style.main}>
      <div className={style.oneThird}>
        <h2>Запрос</h2>
        <RequestContainer />
      </div>
      <div className={style.twoThird}>
        <h2>Ответ</h2>
        <ResponseContainer />
      </div>
    </div>
  );
}
