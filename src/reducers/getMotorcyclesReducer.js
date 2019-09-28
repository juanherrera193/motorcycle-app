import * as types from '../actions';

export default function (state = [], action) {
    const response = action.response;
    const error = action.error;
    switch (action.type) {
        case types.GET_MOTORCYCLES_SUCCESS:
            return { ...state, response };
        case types.GET_MOTORCYCLES_ERROR:
            return { ...state, error };
        default:
            return state;
    }
};