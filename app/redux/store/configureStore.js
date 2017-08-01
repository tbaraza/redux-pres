import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

export default function configureStore() {
    const enhancer = compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    const store = createStore(rootReducer, enhancer);
    return store;
}

// const consoleLogMiddleware = store => next => action => {
//     console.log(next(action));
// };
