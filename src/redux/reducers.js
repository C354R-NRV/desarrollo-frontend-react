import { combineReducers } from 'redux';

//importacion de todos los reducers
import defaultReducer from './default/defaultReducer';
import productReducer from './Product/productReducer';
import formReducer from './form/formReducer';

const rootReducer = combineReducers({
    default: defaultReducer, 
    product: productReducer,
    form: formReducer,
});

export default rootReducer;
