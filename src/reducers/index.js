import {combineReducers} from 'redux';
import CryptoReducer from "./CryptoReducer";
import FilterReducer from './FilterReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    crypto: CryptoReducer,
    filters: FilterReducer,
    auth: AuthReducer
});
