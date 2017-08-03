import types from '../actionTypes';

const DEFAULT_STATE = {
    email: '',
    password: '',
    data: {},
};

/* selector */
export function getEmail(state) {
    return state.auth.email;
}

/* action creators */
export function signupRequest() {
    return {
        type: types.SIGN_UP_REQUEST,
    };
}

export function signupRequestSuccess(user) {
    return {
        type: types.SIGNUP_REQUEST_SUCCESS,
        payload: user,
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
    case types.GET_STARSHIPS_SUCCESS:
        return {
            ...state,
            data: action.payload.data,
        };

    case types.GET_STARSHIPS_FAIL:
        return {
            ...state,
            errors: action.payload,
        };

    default:
        return state;
    }
}

export function signUp(email, password) {
    return (dispatch) => {
        dispatch(signupRequest());
        return setTimeout(
            dispatch(signupRequestSuccess({ email, password }),
            1000));
    };
}
