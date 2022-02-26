import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import { Helmet } from "react-helmet";

import store from "./configeru-store";

import "./style.css";
import MainContainer from "./components/Main/MainContainer";

const App = () => (
  <Provider store={store}>
    <Helmet>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      <meta charSet="utf-8" />
      <title>Pre4eker</title>
      <meta name="description" content="Сервис проверки акций" />
    </Helmet>
    <Normalize />

    <MainContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
