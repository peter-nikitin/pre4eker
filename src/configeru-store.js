import { createStore, applyMiddleware,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime'
import thunk from 'redux-thunk';

// import {countReducer} from './counter/reducer'; 
import {selectorReducer} from './blocks/Selector/reducer'; 

const allReducers = combineReducers({
  selectorReducer
})

export const store = createStore(allReducers, applyMiddleware(thunk)); 
