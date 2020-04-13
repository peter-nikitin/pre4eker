import React from "react";

import style from "./Main.css";
import {RequestContainer} from '../requset/RequestForm/RequestContainer';
import {ResponseContainer} from '../respose/ResponseContainer';

export default function Main(props) {
  return (
    <div className={style.main}>
      {/* <RequestContainer/> */}
      <ResponseContainer/>
    </div>
  );
}
