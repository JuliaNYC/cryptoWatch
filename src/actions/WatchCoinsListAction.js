import firebase from "firebase";
import {
    ADD_COINS_TO_WATCH_LIST,
    ADD_COINS_TO_WATCH_LIST_SUCCESS,
    ADD_COINS_TO_WATCH_LIST_ERR,
    FETCH_WATCHED_COINS,
    FETCH_WATCHED_COINS_SUCCESS,
    FETCH_WATCHED_COINS_ERR,
    FETCH_WATCHED_COIN,
    FETCH_WATCHED_COIN_SUCCESS,
    FETCH_WATCHED_COIN_ERR
} from "../utils/Constants.js";
import CoinAPI from "../services/api/CoinAPI";


export const addCoinToWatchList = (coin) => {
    const {currentUser} = firebase.auth();
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
            dispatch({type: FETCH_WATCHED_COINS})
            firebase.database().ref(`/users/${currentUser.uid}/coins`)
                .on('value', snapshot => {
                    dispatch({type: FETCH_WATCHED_COINS_SUCCESS, payload: snapshot.val()})
                })
               /* .catch(err => {
                    console.log("err------ here >", err)
                    dispatch({type: FETCH_WATCHED_COINS_ERR, payload: err})
                })*/
        }

}

export const fetchWatchedCoin = (id) => {
    return dispatch => {
        dispatch({type: FETCH_WATCHED_COIN})
        return CoinAPI.getCoin(id)
            .then(coin => {
                dispatch({type: FETCH_WATCHED_COIN_SUCCESS, payload: coin.data.data})
            })
            .catch(err => {
                console.log("err------ here >", err)
                dispatch({type: FETCH_WATCHED_COIN_ERR, payload: err})
            })
    }
}


