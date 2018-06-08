import axios from "axios";
import {
    api_root_url,
    FETCHING_COIN_DATA,
    FETCH_COIN_DATA_SUCESS,
    FETCH_COIN_DATA_ERR

} from "../utils/Constants.js";



/*
export const fetchCoinData = (startPoint, sortBy) => {
    console.warn("startPoint", startPoint, sortBy)
    return dispatch => {
        dispatch({type: FETCHING_COIN_DATA})
        return axios.get(`${api_root_url}/v1/ticker/?start=${startPoint}&limit=100`)
            .then(res => {
                console.warn("action date", res)
                dispatch({type: FETCH_COIN_DATA_SUCESS, payload: res.data})
            })

            .catch(err => {
                console.log("err------ here >", err)
                dispatch({type: FETCH_COIN_DATA_ERR, payload: err.data})
            })
    }
}*/

/*

export const fetchCoinData = () => {
    return dispatch => {
        dispatch({type: FETCHING_COIN_DATA})

        Promise.all(
            [...new Array(17)].map((item,i)=>i === 0 ? 0 : (i + "01") )
                .map(start => {
                    console.warn("?!", start)
                    return axios.get(`${api_root_url}/v1/ticker/?start=${start}`)
                })
        ).then(results=>results.forEach(result =>
                    dispatch({type: FETCH_COIN_DATA_SUCESS, payload: result.data}))
        ).catch(
            err => dispatch({type: FETCH_COIN_DATA_ERR, payload: err.data})
        );


    }
}*/
/*
export const fetchCoinData = () => {
    return dispatch => {
        const promises = [];

        dispatch({type: FETCHING_COIN_DATA})

        for (var i = 0; i < 3; i++) {
            const start = i === 0 ? 0 : (i + "01");
            let getData = axios.get(`${api_root_url}/v1/ticker?start=${start}`)
                .then(res => {
                    dispatch({type: FETCH_COIN_DATA_SUCESS, payload: res.data})
                })
                .catch(err => {
                    dispatch({type: FETCH_COIN_DATA_ERR, payload: err.data})
                })
            promises.push(getData)
        }
        return Promise.all(promises)
    }
}*/

export const fetchCoinData = (startPoint, sortBy) => {
    console.warn("startPoint", startPoint, sortBy)
    return dispatch => {
        dispatch({type: FETCHING_COIN_DATA})
        return axios.get(`${api_root_url}/v2/ticker/?start=${startPoint}&limit=10`)
            .then(res => {
                console.warn("action date", res.data.data)
                dispatch({type: FETCH_COIN_DATA_SUCESS, payload: res.data.data})
            })

            .catch(err => {
                console.log("err------ here >", err)
                dispatch({type: FETCH_COIN_DATA_ERR, payload: err.data})
            })
    }
}