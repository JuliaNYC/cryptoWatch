import {
    FETCHING_COIN_DATA,
    FETCH_COIN_DATA_SUCESS,
    FETCH_COIN_DATA_ERR} from "../utils/Constants";

const initialState = {
    isFetching: null,
    data: [],
    /*searchItem: "",*/
    hasError: false,
    errorMsg: null
}

export default function (state = initialState, action) {

   /* if ((action.payload!== null && action.payload!== undefined)) {
        console.warn("wtf", [...state.data])
    } else {
        console.warn("fuck")
    }*/

    console.warn("action payload", action.payload, "state.data--->", state.data)
    console.log("actions", action)
    switch (action.type) {
        case FETCHING_COIN_DATA:
            return {
                ...state,
                isFetching: true
               // data: null, hasError: false, errorMsg: null
            }

        case FETCH_COIN_DATA_SUCESS:
            return {
                ...state,
                isFetching: false,
             //  data : state.data!== null & action.payload!== null && action.payload!== undefined ? [...state.data, ...action.payload] : action.payload,
                data: action.payload,
             /*   data: [...state.data, action.payload],*/
                hasError: false
              //  errorMsg: null
            }


        case FETCH_COIN_DATA_ERR:
            return {
                ...state,
                isFetching: false,
              //  data: action.payload,
                hasError: true,
                errorMsg: action.err
            }

        default:
            return state;
    }
}