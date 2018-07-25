import {
    FETCH_WATCHED_COINS_SUCCESS } from "../utils/Constants";

const initialState = {
   // coins: []
}

export default (state = initialState, action) => {
   switch (action.type) {
       case FETCH_WATCHED_COINS_SUCCESS:
           console.warn("action in watch", action)
           return {
               ...state, ...action.payload
              // coins: [...state.coins, action.payload]

           }
       default:
           return state;
   }
}