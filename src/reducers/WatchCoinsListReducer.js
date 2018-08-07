import {
    FETCH_WATCHED_COINS,
    FETCH_WATCHED_COINS_SUCCESS
} from "../utils/Constants";

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
        default:
            return state;
    }
}
