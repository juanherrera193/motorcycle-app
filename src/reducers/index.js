import { combineReducers } from 'redux';
import getMotorcycles from './getMotorcyclesReducer';
import saveMotorcycle from './saveMotorcycleReducer';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    getMotorcycles,
    saveMotorcycle
});

export default rootReducer;