import axios from "axios";
import {
    EMAIL_CHANGED
} from "../utils/Constants.js";

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}