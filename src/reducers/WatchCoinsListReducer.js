/*
import {
    FETCH_WATCHED_COINS_SUCCESS,
    FETCH_WATCHED_COIN,
    FETCH_WATCHED_COIN_SUCCESS,
    FETCH_WATCHED_COIN_ERR} from "../utils/Constants";

const initialState = {
    coins: {},
    isFetchingCoin: null,
    hasError: false,
    errorMsg: null,
    coin: {}
}

export default (state = initialState, action) => {
   switch (action.type) {
       case FETCH_WATCHED_COINS_SUCCESS:
           console.warn("COINSSSSS", action.payload)
           return {
               ...state,
           /!*    isFetchingCoin: false,*!/
             //  coins: {...state.coins, ...action.payload}
               coins: {...state.coins, ...action.payload}
           }


       case FETCH_WATCHED_COIN:
           return {
               ...state,
               isFetchingCoin: true
           }
       case FETCH_WATCHED_COIN_SUCCESS:
           console.warn("action in watch", action.payload)
           return {
              // ...state,
               isFetchingCoin: false,
             //  coin: {...action.payload}
               coin: {...action.payload}
           }
       case FETCH_WATCHED_COIN_ERR:
           return {
               ...state,
               isFetchingCoin: false,
               hasError: true,
               errorMsg: action.err
           }
       default:
           return state;
   }
}
*/

import {
    FETCH_WATCHED_COINS,
    FETCH_WATCHED_COINS_SUCCESS,
    FETCH_WATCHED_COINS_ERR} from "../utils/Constants";

const initialState = {
    isFetchingCoins: null,
    hasError: false,
    errorMsg: null,
    coins: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WATCHED_COINS:
            return {
                ...state,
                isFetchingCoins: true
            }
        case FETCH_WATCHED_COINS_SUCCESS:
            return {
                ...state,
                isFetchingCoins: false,
                hasError: false,
                coins: {...state.coins, ...action.payload}
            }
        case FETCH_WATCHED_COINS_ERR:
            return {
                ...state,
                isFetchingCoins: false,
                hasError: true,
                errorMsg: action.err
            }
        default:
            return state;
    }
}
