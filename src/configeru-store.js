import { createStore, applyMiddleware,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime'
import thunk from 'redux-thunk';

// import {countReducer} from './counter/reducer'; 
import {requestFormReducer} from './blocks/requset/RequestForm/reducer'; 
import {responseReducer} from './blocks/respose/reducer'; 
import {requestReducer} from 'src/blocks/requset/reducer'; 

const allReducers = combineReducers({
  requestReducer,
  responseReducer,
  requestFormReducer,
})

export const store = createStore(allReducers, applyMiddleware(thunk)); 
