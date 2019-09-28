import { takeLatest } from 'redux-saga/effects';

import { getMotorcylesSaga, saveMotorcyleSaga } from '../sagas/medicineFormulaSaga';

import * as types from '../actions';

export default function* motorcyclesSaga() {
  yield takeLatest(types.GET_MOTORCYCLES, getMotorcylesSaga);
  yield takeLatest(types.SAVE_MOTORCYCLE, saveMotorcyleSaga);
}