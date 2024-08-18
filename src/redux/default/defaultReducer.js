import { SET_NAME_MODULE } from './defaultTypes' 

//definiendo/declarando las variables globales
const initialState = {
    name : 'Desarrollo Frontend con React',
    
};

const defaultReducer = (state =  initialState, action) => {
    switch (action.type) {
        case SET_NAME_MODULE: {
            return {
                ...state,
                name: action.payload,
            }
        }
        
        default:
            return state;
    }
};

export default defaultReducer;