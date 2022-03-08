import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    const composeEnhancers = window.__REACT_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev Tools.
    return createStore(rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())));
}