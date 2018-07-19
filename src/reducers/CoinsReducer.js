import {
    FETCHING_COIN_DATA,
    FETCH_COIN_DATA_SUCESS,
    FETCH_COIN_DATA_ERR,
    RESET_STATE} from "../utils/Constants";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMsg: null
}

export default (state = initialState, action) => {
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
                data: [...state.data, ...action.payload],
                hasError: false
            }


        case FETCH_COIN_DATA_ERR:
            return {
                ...state,
                isFetching: false,
                hasError: true,
                errorMsg: action.err
            }
        case RESET_STATE:
            return {...state, data:[]}

        default:
            return state;
    }
}