import { createStore, applyMiddleware, combineReducers } from "redux";
import "regenerator-runtime/runtime";
import thunk from "redux-thunk";

import mainReducer from "src/blocks/Main/reducer";

const allReducers = combineReducers({
  mainReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk));
export default store;
