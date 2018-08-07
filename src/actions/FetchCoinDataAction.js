import {
    FETCHING_COIN_DATA,
    FETCH_COIN_DATA_SUCESS,
    FETCH_COIN_DATA_ERR,
    RESET_STATE

} from "../utils/Constants.js";
import CoinAPI from "../services/api/CoinAPI";


export const fetchCoinData = (startPoint, initialSortBy) => {
    return dispatch => {
        dispatch({type: FETCHING_COIN_DATA})
        return CoinAPI.getCoins(startPoint, initialSortBy)

            .then(coins => {
                dispatch({type: FETCH_COIN_DATA_SUCESS, payload: coins})
            })
            .catch(err => {
                dispatch({type: FETCH_COIN_DATA_ERR, payload: err})
            })
    }
}

export const resetState = () => {
    return dispatch => {
        dispatch({type: RESET_STATE})
    }
}