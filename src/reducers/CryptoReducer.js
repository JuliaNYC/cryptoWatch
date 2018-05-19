import {
    FETCHING_COIN_DATA,
    FETCH_COIN_DATA_SUCESS,
    FETCH_COIN_DATA_ERR} from "../utils/Constants";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMsg: null
}

export default function (state = initialState, action) {
    console.log("actions", action)
    switch (action.type) {
        case FETCHING_COIN_DATA:
            return {
                ...state, isFetching: true, data: null, hasError: false, errorMsg: null
            }
        case FETCH_COIN_DATA_SUCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMsg: null
            }
        case FETCH_COIN_DATA_ERR:
            return {
                ...state, isFetching: false, data: action.payload, hasError: true, errorMsg: action.err
            }

        default:
            return state;
    }
}