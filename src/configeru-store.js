import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import "regenerator-runtime/runtime";
import thunk from "redux-thunk";

import mainReducer from "src/components/Main/reducer";

const allReducers = combineReducers({
  mainReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
