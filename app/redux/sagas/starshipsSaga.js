import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import types from '../actionTypes';


function* fetchStarships() {
    try {
        const starShips = yield call(() => axios.get('http://swapi.co/api/starships/?format=json'));
        yield put({ type: types.GET_STARSHIPS_SUCCESS, payload: starShips });
    } catch (error) {
        yield put({ type: types.GET_STARSHIPS_FAIL, payload: error });
    }
}

// worker Saga: will be fired on SIGN_UP_REQUEST_SUCCESS actions
export default function* getStarshipsSaga() {
    yield takeEvery(types.SIGNUP_REQUEST_SUCCESS, fetchStarships);
}

