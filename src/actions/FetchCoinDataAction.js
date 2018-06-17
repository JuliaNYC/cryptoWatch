import axios from "axios";
import {
    api_root_url,
    FETCHING_COIN_DATA,
    FETCH_COIN_DATA_SUCESS,
    FETCH_COIN_DATA_ERR,
    RESET_STATE

} from "../utils/Constants.js";

    export const fetchCoinData = (startPoint, initialSortBy, sortBy) => {
       /* console.warn("startPoint", startPoint, initialSortBy, sortBy)*/
        return dispatch => {
            const sortParam = initialSortBy === undefined ? "rank" : initialSortBy;
            dispatch({type: FETCHING_COIN_DATA})
            return axios.get(`${api_root_url}/v2/ticker/?start=${startPoint}&limit=10&sort=${sortParam}&structure=array`)

                .then(res => {
                   /* console.warn("action date", res.data)*/
                    dispatch({type: FETCH_COIN_DATA_SUCESS, payload: res.data.data})
                })
                .catch(err => {
                    console.log("err------ here >", err)
                    dispatch({type: FETCH_COIN_DATA_ERR, payload: err.data})
                })
        }
    }

    export const resetState = () => {
        return dispatch => {
            dispatch({type: RESET_STATE})
        }
    }