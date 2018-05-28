import {
    FILTER_TEXT,
    SORT_BY} from "../utils/Constants";

const initialState = {
    text: '',
    sortBy: ''
};





export default (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return {
                ...state,
                text: action.text
            };

        /*case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortType
            };*/

        default:
            return state;
    }
}