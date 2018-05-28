import {
    FILTER_TEXT,
    SORT_BY} from "../utils/Constants";

const filtersReducerDefaultState = {
    text: '',
    sortBy: ''
};

/*export const filterText = (text = '') => {
    return dispatch => {
        dispatch({
            type: 'FILTER_TEXT',
            text
        })
    }

};*/


export const filterDataAction = (text) => {
    console.warn("action filterResults", text)
        return dispatch => {
            dispatch({
                type: FILTER_TEXT,
                text
            })

        }
    }

/*export const sortBy = (sortType) => {
    return dispatch => {
        dispatch({
            type: 'SORT_BY',
            sortType
        })
    }

};*/

