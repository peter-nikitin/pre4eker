import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { Normalize } from 'styled-normalize'

import {store} from './configeru-store';

import './style.css';
import Header from './blocks/Header/Header';
import Main from './blocks/Main/Main';




const App = () =>  (
  <Provider store={store}>
    <Normalize />
    <Header />
    <Main  />

  
  </Provider>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);