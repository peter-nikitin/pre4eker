import React from "react";

import style from "./Main.css";
import {RequestContainer} from '../Request/RequestContainer';

export default function Main(props) {
  return (
    <div className={style.main}>
      <RequestContainer/>
    </div>
  );
}
