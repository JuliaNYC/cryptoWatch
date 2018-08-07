import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    REQUEST_LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,

    REQUEST_LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,

    REQUEST_SIGNUP_USER,
    IS_USER_LOGGED_IN
} from "../utils/Constants.js";
import {AsyncStorage} from "react-native";
import {Actions} from 'react-native-router-flux';
import firebase from "firebase";

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: REQUEST_LOGIN_USER});
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
            .then((user) => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch))
    }
}

export const signUpUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: REQUEST_SIGNUP_USER});
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch))
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
    Actions.main()
}

const loginUserFail = dispatch => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}

export const isUserLoggedIn = () => {
    return (dispatch) => {
        dispatch({type: IS_USER_LOGGED_IN})
        firebase.auth().onAuthStateChanged(user => {
            console.warn("userr", user)
            if (user) {
                Actions.main()
            } else {
                Actions.auth()

            }
        })
    }

}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({type: REQUEST_LOGOUT_USER})
        return firebase.auth().signOut()
            .then(() => {
                dispatch({
                    type: LOGOUT_USER_SUCCESS
                })
                isUserLoggedIn()

            })
            .catch(() => {
                dispatch({
                    type: LOGOUT_USER_FAIL
                })
            })
    }
}