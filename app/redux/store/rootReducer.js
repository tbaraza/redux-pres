import { combineReducers } from 'redux-immutable';
import auth from '../modules/auth';
import count from '../modules/count';

const rootReducer = combineReducers({
    auth,
    count,
});

export default rootReducer;
/**
 * create a function that takes reducers as an object
 * it should return a reducer
 * reduce the state
 * every argument in the config will change the state in some way
 * get previus state
 * get new stae
 * check edge cases

 const customCombineReducers = (config) => {
     return (state, action) => {
         return Object.keys(config).reduce((state, key) => {
             const reducer = config[key];
             previousState = state.get(key);
             newState = reducer(previousState, action);

            if (!newState) {
                throw new Error(`${key}reducer returned undefined `)
            }

            return state.set(key, newState);

         }, state);
     }
 }
*/

/*
state tree
{
    auth: {
        email: '',
        password: '',
    },

    count: {
        number: 0,
    }
}

*/
