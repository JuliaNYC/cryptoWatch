import {
    FETCH_WATCHED_COINS_SUCCESS, FETCH_WATCHED_COIN_SUCCESS } from "../utils/Constants";

const initialState = {
    coins: {},
    coin: {}
}

export default (state = initialState, action) => {
   switch (action.type) {
       case FETCH_WATCHED_COINS_SUCCESS:
           console.warn("action in watch", action.payload)
           return {
               ...state,
               coins: {...state.coins, ...action.payload}

           }
       case FETCH_WATCHED_COIN_SUCCESS:
           return {
               ...state,
               coin: {...action.payload}
           }
       default:
           return state;
   }
}