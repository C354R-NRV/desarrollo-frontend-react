import { SET_FORM_DATA, CLEAR_FORM_DATA, SET_LOGGED_IN } from './formTypes' 

//definiendo/declarando las variables globales
const initialState = {
    formData : {
        username:'',
        email:'',
        password:'',
    },
    passwordMaster: 'mod7ReactUSIP',
    isLoggedIn: false, 
};

const formReducer = (state =  initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                },  
            }
        }
        case CLEAR_FORM_DATA: {
            return {
                ...state,
                formData: {
                    username:'',
                    email:'',
                    password:'',
                },
            }
        }
        case SET_LOGGED_IN: {
            return {
                ...state,
                isLoggedIn: action.payload,  
            };
        }
        
        default:
            return state;
    }
};

export default formReducer;