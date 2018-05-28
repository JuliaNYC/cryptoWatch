import {combineReducers} from "redux";
import CryptoReducer from "./CryptoReducer";
import FilterReducer from './FilterReducer';

/*export default combineReducers({
    crypto:CryptoReducer
})*/


export default combineReducers({
    crypto: CryptoReducer,
    filters: FilterReducer
});
