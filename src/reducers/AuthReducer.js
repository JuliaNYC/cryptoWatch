import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    REQUEST_LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    IS_USER_LOGGED_IN } from "../utils/Constants";

const initialState = {
    email: "",
    password: "",
    isFetchingUser: false,
    user: null,
    loggedIn: false,
    errorMsg: ""
}

export default (state = initialState, action) => {
    console.warn("reducer", state.isFetchingUser)
    switch(action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case REQUEST_LOGIN_USER:
            return {...state, isFetchingUser: true, errorMsg: ""}
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload, isFetchingUser: false, errorMsg: ""}
        case LOGIN_USER_FAIL:
            return {...state,  isFetchingUser: false, errorMsg: "Authentication failed"};
            case IS_USER_LOGGED_IN:
        return {...state, loggedIn: true}
        default:
            return state;
    };
}