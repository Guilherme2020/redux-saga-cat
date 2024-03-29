import { applyMiddleware, createStore } from 'redux';
import { ICartState } from './modules/cart/types';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/cart/rootSaga';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
));

sagaMiddleware.run(rootSaga);

export default store;