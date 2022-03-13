import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import {apiCallError, startApiCall} from "./apiStatusActions";


export function createCourse(course) {
    return {type: types.CREATE_COURSE, course};
}

export function loadCourseSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course}
}

export function deleteCourseOptimistic(course) {
    return {type: types.DELETE_COURSE_OPTIMISTIC, course};
}

export function loadCourses() {
    return function (dispatch) {
        dispatch(startApiCall());
        return courseApi
            .getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses));
            })
            .catch(error => {
                dispatch(apiCallError(error))
                throw error;
            });
    };
}

export function saveCourse(course) {
    //eslint-disable-next-line no-unused-vars
    return function (dispatch, getState) {
        dispatch(startApiCall());
        return courseApi
            .saveCourse(course)
            .then(saveCourse => {
                course.id
                    ? dispatch(updateCourseSuccess(saveCourse))
                    : dispatch(createCourseSuccess(saveCourse));
            })
            .catch(error => {
                dispatch(apiCallError(error))
                throw error;
            });
    };
}

export function deleteCourse(course) {
    return function (dispatch) {
        // Doing optimistic delete, so not dispatching start/end api call
        // actions, apiCallError action since we are not showing the loading status for this.
        dispatch(deleteCourseOptimistic(course));
        return courseApi.deleteCourse(course.id);
    }
}
