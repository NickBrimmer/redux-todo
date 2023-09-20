import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./redux/reducers/rootReducer";
import { todos } from "./sagas/saga";

const sagaMiddleWare = createSagaMiddleware();
const middleware = [logger, sagaMiddleWare];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleWare.run(todos);

export default store;
