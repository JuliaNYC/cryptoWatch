import {
    ADD_COINS_TO_WATCH_LIST } from "../utils/Constants";

const initialState = {
/*    isFetching: null,*/
    watchedCoins: []
    /*hasError: false,
    errorMsg: null*/
}

export default (state = initialState, action) => {
   switch (action.type) {
       case ADD_COINS_TO_WATCH_LIST:
           return {
               ...state
           }
       default:
           return state;
   }
}