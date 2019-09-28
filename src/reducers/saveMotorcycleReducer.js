import * as types from '../actions';

export default function (state = [], action) {
    const response = action.response;
    const error = action.error;
    switch (action.type) {
        case types.SAVE_MOTORCYCLE_SUCCESS:
            return { ...state, response };
        case types.SAVE_MOTORCYCLE_ERROR:
            return { ...state, error };
        default:
            return state;
    }
};