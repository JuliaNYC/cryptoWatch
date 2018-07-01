import {combineReducers} from 'redux';
import CryptoReducer from "./CryptoReducer";
import FilterReducer from './FilterReducer';
import AuthReducer from './AuthReducer';
import FullDataReducer from './FullDataReducer';


export default combineReducers({
    crypto: CryptoReducer,
    allData: FullDataReducer,
    filters: FilterReducer,
    auth: AuthReducer
});
