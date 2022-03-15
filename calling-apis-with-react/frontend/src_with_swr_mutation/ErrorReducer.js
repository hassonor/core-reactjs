const ErrorReducer = (state = { error: null }, action) => {
    const { error, type } = action;

    if (type === "ERROR_CLOSE") {
        return {
            error: null
        }
    } else if (type === "ERROR_SET") {
        return {
            error: error
        }
    } else {
        return state;
    }
}

export default ErrorReducer;