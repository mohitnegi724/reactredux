import {combineReducers} from 'redux';
import userReducer from './reducerUser';

const allReducers = combineReducers({
    users: userReducer,
});

export default allReducers;
