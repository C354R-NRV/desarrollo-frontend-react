import { combineReducers } from 'redux';

//importacion de todos los reducers
import defaultReducer from './default/defaultReducer';

const rootReducer = combineReducers({
    default: defaultReducer,

});

export default rootReducer;
