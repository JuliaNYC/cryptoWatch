import {
    ADD_COINS_TO_WATCH_LIST_SUCCESS } from "../utils/Constants";

const initialState = {
    coins: []
}

export default (state = initialState, action) => {
   switch (action.type) {
       case ADD_COINS_TO_WATCH_LIST_SUCCESS:
           return {
               ...state,
               coins: [...state.coins, action.payload]
           }
       default:
           return state;
   }
}