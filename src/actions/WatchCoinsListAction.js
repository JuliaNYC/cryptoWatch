import firebase from "firebase";
import {
    ADD_COINS_TO_WATCH_LIST,
    ADD_COINS_TO_WATCH_LIST_SUCCESS,
    ADD_COINS_TO_WATCH_LIST_ERR,
    FETCH_WATCHED_COINS_SUCCESS,
    FETCH_WATCHED_COIN,
    FETCH_WATCHED_COIN_SUCCESS
} from "../utils/Constants.js";
import CoinAPI from "../services/api/CoinAPI";

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
                    payload: coin
                })
            })
            .catch(err => {
                console.log("err------ here >", err)
                dispatch({type: ADD_COINS_TO_WATCH_LIST_ERR, payload: err})
            })
    }

}


export const fetchWatchedCoins = () => {
    const {currentUser} = firebase.auth();

    return dispatch => {
        firebase.database().ref(`/users/${currentUser.uid}/coins`)
            .on('value', snapshot => {
                dispatch({type: FETCH_WATCHED_COINS_SUCCESS, payload: snapshot.val()})
            })
    }
}

export const fetchWatchedCoin = (id) => {
    return dispatch => {
        dispatch({type: FETCH_WATCHED_COIN})
        return CoinAPI.getCoin(id)
            .then(coin => {
                console.warn("coin oneeeeeeee------>", coin)
                dispatch({type: FETCH_WATCHED_COIN_SUCCESS, payload: coin})
            })
            /*.catch(err => {
                console.log("err------ here >", err)
                dispatch({type: FETCH_COIN_DATA_ERR, payload: err})
            })*/
    }
}