import {
    FETCH_WATCHED_COIN,
    FETCH_WATCHED_COIN_SUCCESS,
    FETCH_WATCHED_COIN_ERR} from "../utils/Constants";

const initialState = {

    isFetchingCoin: null,
    hasError: false,
    errorMsg: null,
    coin: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
case FETCH_WATCHED_COIN:
        return {
            ...state,
            isFetchingCoin: true
        }
case FETCH_WATCHED_COIN_SUCCESS:
    return {
         ...state,
        isFetchingCoin: false,
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