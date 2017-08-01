import types from '../actionTypes';

const DEFAULT_STATE = {
    number: 0,
};

export function increment(number) {
    return {
        type: types.INCREMENT,
        payload: number,
    }
}

export function decrement(number) {
    return {
        type: types.DECREMENT,
        payload: number,
    };
}

export default function reducer(state = DEFAULT_STATE, action = {}) {
    switch (action.type) {
    case types.INCREMENT:
        return {
            ...state,
            number: action.payload,
        };
    case types.DECREMENT:
        return {
            ...state,
            number: action.payload,
        };
    default:
        return state;

    }
}
