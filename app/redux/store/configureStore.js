import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import getStarshipsSaga from '../sagas/starshipsSaga';
import rootReducer from './rootReducer';
import getInitialData from './defaultState';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const initialState = getInitialData();
console.log('initialState', initialState);

const enhancer = compose(
    applyMiddleware(
        logger,
        sagaMiddleware,
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, initialState, enhancer);

// then run the saga
sagaMiddleware.run(getStarshipsSaga);


// const consoleLogMiddleware = store => next => action => {
//     console.log(next(action));
// };
