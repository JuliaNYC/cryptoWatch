import {
    FETCHING_ALL_COIN_DATA,
    FETCH_ALL_COIN_DATA_SUCESS,
    FETCH_ALL_COIN_DATA_ERR
} from "../utils/Constants";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMsg: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ALL_COIN_DATA:
            return {
                ...state,
                isFetching: true
            }

        case  FETCH_ALL_COIN_DATA_SUCESS:
            return {
                ...state,
                isFetching: false,
                data: [...state.data, ...action.payload],
                hasError: false
            }


        case FETCH_ALL_COIN_DATA_ERR:
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