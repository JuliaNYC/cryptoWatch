import {
    FETCHING_COIN_DATA,
    FETCH_COIN_DATA_SUCESS,
    FETCH_COIN_DATA_ERR} from "../utils/Constants";

const initialState = {
    isFetching: null,
  /*  data: [],*/
    data: {},
    hasError: false,
    errorMsg: null
}

export default function (state = initialState, action) {
console.warn("reducer", action.payload)
    switch (action.type) {
        case FETCHING_COIN_DATA:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_COIN_DATA_SUCESS:
            return {
                ...state,
                isFetching: false,
               /* data: action.payload,*/
                data: {...state.data, ...action.payload},
                /*data: [...state.data, ...action.payload],*/
                hasError: false
              //  errorMsg: null
            }


        case FETCH_COIN_DATA_ERR:
            return {
                ...state,
                isFetching: false,
                hasError: true,
                errorMsg: action.err
            }

        default:
            return state;
    }
}