import {
    FETCHING_COIN_DATA,
    FETCH_COIN_DATA_SUCESS,
    SEARCH_RESULTS,
    DATA_FILTERED_BY_PRICE,
    FETCH_COIN_DATA_ERR} from "../utils/Constants";

const initialState = {
    isFetching: null,
    data: [],
    /*searchItem: "",*/
    hasError: false,
    errorMsg: null
}

export default function (state = initialState, action) {
    console.log("actions", action)
    switch (action.type) {
        case FETCHING_COIN_DATA:
            return {
                ...state,
                isFetching: true, data: null, hasError: false, errorMsg: null
            }

        case FETCH_COIN_DATA_SUCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMsg: null
            }

        /*case SEARCH_RESULTS:
            return {
                ...state,
                searchItem: action.search
            }*/

      /*  case DATA_FILTERED_BY_PRICE:
            console.warn("hello",state.data)
            return {
                ...state,
                isFetching: false,
                data: action.payload.sort((a,b) =>parseInt(a.price_usd) - parseInt( b.price_usd)),
                hasError: false,
                errorMsg: null
            }*/

        case FETCH_COIN_DATA_ERR:
            return {
                ...state,
                isFetching: false, data: action.payload, hasError: true, errorMsg: action.err
            }

        default:
            return state;
    }
}