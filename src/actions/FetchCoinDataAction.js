import axios from "axios";
import {
    api_root_url,
    FETCHING_COIN_DATA,
    FETCH_COIN_DATA_SUCESS,
    FETCH_COIN_DATA_ERR,
    RESET_STATE,

    FETCHING_ALL_COIN_DATA,
    FETCH_ALL_COIN_DATA_SUCESS,
    FETCH_ALL_COIN_DATA_ERR

} from "../utils/Constants.js";
import CoinAPI from "../services/api/CoinAPI";

/*export const fetchCoinData = (startPoint, initialSortBy) => {
    return dispatch => {
        const sortParam = initialSortBy === undefined ? "rank" : initialSortBy;
        const start = startPoint === 0 ? 0 : `${startPoint}1`;
        dispatch({type: FETCHING_COIN_DATA})
        return axios.get(`${api_root_url}/v2/ticker/?start=${start}1&limit=10&sort=${sortParam}&structure=array`)

            .then(res => {
                console.warn("resssss---->", res)
                dispatch({type: FETCH_COIN_DATA_SUCESS, payload: res.data.data})
            })
            .catch(err => {
                console.log("err------ here >", err)
                dispatch({type: FETCH_COIN_DATA_ERR, payload: err.data})
            })
    }
}*/

export const fetchCoinData = (startPoint, initialSortBy) => {
    return dispatch => {
        dispatch({type: FETCHING_COIN_DATA})
        return CoinAPI.getCoins(startPoint, initialSortBy)

            .then(coins => {
                console.warn("coins------>", coins)
                dispatch({type: FETCH_COIN_DATA_SUCESS, payload: coins})
            })
            .catch(err => {
                console.log("err------ here >", err)
                dispatch({type: FETCH_COIN_DATA_ERR, payload: err})
            })
    }
}

export const resetState = () => {
    return dispatch => {
        dispatch({type: RESET_STATE})
    }
}


export const fetchAllCoinData = () => {
    return dispatch => {
        const promises = [];

        dispatch({type: FETCHING_ALL_COIN_DATA})

        for (var i = 0; i < 20; i++) {
            const start = i === 0 ? 0 : (i + "01");
            let getData = axios.get(`${api_root_url}/v1/ticker/?start=${start}`)
                .then(res => {
                    dispatch({type: FETCH_ALL_COIN_DATA_SUCESS, payload: res.data})
                })
                .catch(err => {
                    dispatch({type: FETCH_ALL_COIN_DATA_ERR, payload: err.data})
                })
            promises.push(getData)
        }
        return Promise.all(promises)
    }
}
