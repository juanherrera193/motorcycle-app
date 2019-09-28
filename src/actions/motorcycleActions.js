import * as types from './index';

export const getMotorcyclesAction = () => {
    return {
        type: types.GET_MOTORCYCLES
    }
};

export const saveMotorcycleAction = (motorcycle) => {
    return {
        type: types.SAVE_MOTORCYCLE, motorcycle
    }
};