import { createStore, applyMiddleware,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime'
import thunk from 'redux-thunk';

// import {countReducer} from './counter/reducer'; 
import {requestReducer} from './blocks/Request/reducer'; 

const allReducers = combineReducers({
  requestReducer
})

export const store = createStore(allReducers, applyMiddleware(thunk)); 
