import React from "react";
import logo from "../../assets/logo.svg";
import style from "./Header.css";

export default function Header() {
  return (
    <div className={style.header}>
      <img src={logo} alt="" />
    </div>
  );
}
