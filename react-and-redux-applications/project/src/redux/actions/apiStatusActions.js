import * as types from './actionTypes.js';

export function startApiCall() {
    return {type: types.START_API_CALL}
}

export function apiCallError() {
    return {type: types.FAILED_API_CALL}
}