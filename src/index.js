import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { Normalize } from 'styled-normalize'

import {store} from './configeru-store';
import {Container} from './counter/container';

import style from './style.css';
import Header from './blocks/Header/Header';
import Main from './blocks/Main/Main';




const App = () =>  (
  <Provider store={store}>
    <Normalize />
    <Header />
    <Main  />
    {/* <Container/> */}
  
  </Provider>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);