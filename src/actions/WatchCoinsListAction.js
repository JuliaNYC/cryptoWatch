import firebase from "firebase";
import {
    ADD_COINS_TO_WATCH_LIST,
    ADD_COINS_TO_WATCH_LIST_SUCCESS,
    ADD_COINS_TO_WATCH_LIST_ERR
} from "../utils/Constants.js";

export const addCoinToWatchList = (coin) => {
    const {currentUser} = firebase.auth();
    console.warn("action ---->", coin, currentUser, currentUser.uid)
    return dispatch => {
        dispatch({type: ADD_COINS_TO_WATCH_LIST})
        firebase.database().ref(`/users/${currentUser.uid}/coins`)
            .push({coin})
            .then((res) => {
                console.warn("ressss", res)
                dispatch({
                    type: ADD_COINS_TO_WATCH_LIST_SUCCESS,
                    payload: res
                })
            })
            .catch(err => {
                console.log("err------ here >", err)
                dispatch({type: ADD_COINS_TO_WATCH_LIST_ERR, payload: err})
            })
    }

}