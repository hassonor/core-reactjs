const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'GET_USERS_WITH_SEARCH':
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default githubReducer