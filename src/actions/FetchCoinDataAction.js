import axios from "axios";
import {
    api_root_url,
    FETCHING_COIN_DATA,
    FETCH_COIN_DATA_SUCESS,
    FETCH_COIN_DATA_ERR} from "../utils/Constants.js";

export const fetchCoinData = (startPoint) => {
    console.warn("startPoint", startPoint)
    return dispatch => {
        dispatch({type: FETCHING_COIN_DATA})
       // return axios.get(`${api_root_url}/v1/ticker/?start=101&limit=10`)
       /* return axios.get(`${api_root_url}/v1/ticker/?limit=10`)*/
          return axios.get(`${api_root_url}/v1/ticker/?start=${startPoint}&limit=10`)
            .then(res => {
                console.log("res: ", res.data)
                dispatch({type: FETCH_COIN_DATA_SUCESS, payload: res.data})
            })
            .catch(err => {
                console.log("err------ here >", err)
                dispatch({type: FETCH_COIN_DATA_ERR, payload: err.data})
            })
    }
}

