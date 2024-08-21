import { combineReducers } from 'redux';

//importacion de todos los reducers
import defaultReducer from './default/defaultReducer';
import productReducer from './Product/productReducer';

const rootReducer = combineReducers({
    default: defaultReducer, 
    product: productReducer,
});

export default rootReducer;
