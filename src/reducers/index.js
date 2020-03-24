import counterReducer from './counter';
import loggedReducer from './isLogged';
import ascyncReducer from './ascyncReducer';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    asc : ascyncReducer
    

})

export default allReducers