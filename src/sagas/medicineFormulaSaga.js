import { call, put } from 'redux-saga/effects';

import * as types from '../actions';
import { getMotorcyles, saveMotorcyle } from '../services/motorcyleService';

export function* getMotorcylesSaga() {
    try {
        const response = yield call(getMotorcyles);
        yield put({ type: types.GET_MOTORCYCLES_SUCCESS, response });
    } catch (error) {
        console.log(error);
        yield put({ type: types.GET_MOTORCYCLES_ERROR, error })
    }
}

export function* saveMotorcyleSaga(request) {
    try {
        const response = yield call(saveMotorcyle, request);
        yield put({ type: types.SAVE_MOTORCYCLE_SUCCESS, response });
    } catch (error) {
        console.log(error);
        yield put({ type: types.SAVE_MOTORCYCLE_ERROR, error })
    }
}