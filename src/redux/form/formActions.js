import { SET_FORM_DATA, SET_LOGGED_IN, CLEAR_FORM_DATA  } from './formTypes'

export const saveFormData = (formData) =>{
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
}

export const setLoggedIn = (isLoggedIn) => {
    return {
        type: SET_LOGGED_IN,
        payload: isLoggedIn,
    };
};

export const clearFormData = () => {
    return {
        type: CLEAR_FORM_DATA,
    };
};