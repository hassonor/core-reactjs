import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import {startApiCall, apiCallError} from "./apiStatusActions";

export function loadAuthorsSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(startApiCall());
        return authorApi
            .getAuthors()
            .then(authors => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                dispatch(apiCallError(error))
                throw error;
            });
    };
}
