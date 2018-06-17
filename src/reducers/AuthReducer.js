import {
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS} from "../utils/Constants";

const initialState = {
    email: "",
    password: "",
    user: null,
    error: ""
}

export default (state = initialState, action) => {
    console.warn("reducer", action.type)
    switch(action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload}
        case LOGIN_USER_FAIL:
            return {...state, error: "Authentication failed"}
        default:
            return state;
    };
}