import * as types from "../actions/actionTypes.js"
import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
    state = initialState.apiCallsInProgress,
    action
) {
    if (action.type === types.START_API_CALL) {
        return state + 1;
    } else if (action.type === types.FAILED_API_CALL || actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state
}