import { combineReducers } from 'redux';

import locationReducer from './locationReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    location: locationReducer,
    user: userReducer,
    auth: authReducer,

});

export default rootReducer;