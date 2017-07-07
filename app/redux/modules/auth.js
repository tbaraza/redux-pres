import types from '../actionTypes';

const DEFAULT_STATE = {
    email: '',
    password: '',
};

export function authUser(user) {
    return {
        type: types.SIGNUP_REQUEST_SUCCESS,
        payload: user
    };
}

export default function reducer(state = DEFAULT_STATE, action = {}) {
    switch (action.type) {
    case types.SIGNUP_REQUEST_SUCCESS:
        return {
            ...state,
            email: action.payload.email,
            password: action.payload.password,
        };

    default:
        return state;
    }
}
