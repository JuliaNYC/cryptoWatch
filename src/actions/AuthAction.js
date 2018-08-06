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
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    IS_USER_LOGGED_IN,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from "../utils/Constants.js";
import {Actions} from 'react-native-router-flux';
import firebase from "firebase";
import {AsyncStorage} from "react-native";
const FBSDK = require('react-native-fbsdk');

const {
    LoginManager,
    AccessToken,
} = FBSDK;



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


/*export const facebookLogin = async dispatch => {
        let token = await AsyncStorage.getItem("fb_token");
        if (token) {
            dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
        } else {
            logInToFaebook(dispatch)
        }
}

const logInToFaebook = async dispatch => {
    /!*let {type, token} = await LoginManager.logInWithReadPermissions("221457465375233", {
        permissions: ["public_profile"]
    });*!/
   /!* let {type, token} = await LoginManager.logInWithReadPermissions(["public_profile"]);
    if (type === "cancel") {
        return dispatch({type: FACEBOOK_LOGIN_FAIL})
    }*!/
    let result = await LoginManager.logInWithReadPermissions(["public_profile"]);
    console.warn("red", result)
    if (type === "cancel") {
        return dispatch({type: FACEBOOK_LOGIN_FAIL})
    }

    await AsyncStorage.setItem("fb_token", JSON.stringify(token));
    dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
}*/

/*export const facebookLogin =  () => {
    return dispatch => {
        let token = AsyncStorage.getItem("fb_token");
        if (token) {
            console.warn("nah")
            dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
        } else {
            console.warn("success")
            dispatch({type: FACEBOOK_LOGIN_FAIL, payload: token})
            // logInToFaebook(dispatch)
        }
    }
}*/

/*const logInToFaebook = async dispatch => {
    /!*let {type, token} = await LoginManager.logInWithReadPermissions("221457465375233", {
        permissions: ["public_profile"]
    });*!/
    /!* let {type, token} = await LoginManager.logInWithReadPermissions(["public_profile"]);
     if (type === "cancel") {
         return dispatch({type: FACEBOOK_LOGIN_FAIL})
     }*!/
    let result = await LoginManager.logInWithReadPermissions(["public_profile"]);
    console.warn("red", result)
    if (type === "cancel") {
        return dispatch({type: FACEBOOK_LOGIN_FAIL})
    }

    await AsyncStorage.setItem("fb_token", JSON.stringify(token));
    dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
}*/

/*export const facebookLogin = () => {
    return (dispatch) => {
        LoginManager.logInWithReadPermissions(['public_profile'])
            .then(
                (result) => {
                    if (result.isCancelled) {
                       console.warn('Whoops!', 'You cancelled the sign in.');
                    } else {
                        console.warn("result", result)
                        AccessToken.getCurrentAccessToken()
                            .then((data) => {
                            console.warn("data", data)
                                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                                firebase.auth().signInWithCredential(credential)
                                    .then(loginUserSuccess(dispatch))
                                    .catch((error) => {
                                        loginUserFail(dispatch);
                                })
                              /!*  const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                                firebase.auth().signInWithCredential(credential)*!/
                                //    .then(loginUserSuccess(dispatch))
                                    /!*.catch((error) => {
                                        loginSingUpFail(dispatch, error.message);
                                    });*!/

                                      //  alert(data.accessToken.toString())


                            });
                    }
                }
            );
    };
};*/


export const facebookLogin = () => {
    return (dispatch) => {
        LoginManager.logInWithReadPermissions(['public_profile'])
            .then(
                (result) => {
                    if (result.isCancelled) {
                        Alert.alert('Whoops!', 'You cancelled the sign in.');
                    } else {
                        AccessToken.getCurrentAccessToken()
                            .then((data) => {
                                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                                firebase.auth().signInAndRetrieveDataWithCredential(credential)
                                    .then(loginUserSuccess(dispatch))
                                    .catch((error) => {
                                        loginUserFail(dispatch);
                                    });
                            });
                    }
                },
                (error) => {
                    Alert.alert('Sign in error', error);
                },
            );
    };
};

/*

export const facebookLogin =  () => {
    return dispatch => {
        let token = AsyncStorage.getItem("fb_token");
        if (token) {
            console.warn("nah")
            dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
        } else {
            console.warn("success")
            dispatch({type: FACEBOOK_LOGIN_FAIL, payload: token})
            // logInToFaebook(dispatch)
        }
    }
}*/
