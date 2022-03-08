### Why Redux?

________________________________________________________________

* One Store
* Reduced Boilerplate
* Isomorphic/Universal Friendly
* Hot Reloading
* Time-travel debugging
* Small

#### When is Redux Helpful?

* Complex data flows
* Inter-component communication
* Non-hierarchical data
* Many actions
* Same data used in many places

#### Redux: 3 Principles

* One immutable store
* Actions trigger changes
* Reducers update state

### Redux: Actions, Store, Reducers

________________________________________________________________

##### Redux Store

* Creating Redux Store: `let store = createStore(reducer)`
* dispatch: `store.dispatch(action)`, subscribe: `store.subscribe(listener)`
* getState: `store.getState()`
* replaceReducer: `replaceReducer(nextReducer)`

##### Two Component Types

* Container:
    * Focus on how things work
    * Aware of Redux
    * Subscribe to Redux State
    * Dispatch Redux actions

* Presentational
    * Focus on how things look
    * Unaware of Redux
    * Read data from props
    * Invoke callbacks on props

### Initial Redux Setup

________________________________________________________________

1. Create action
2. Create reducer
3. Create root reducer
4. Configure store
5. Instantiate store
6. Connect component
7. Pass props via connect
8. Dispatch action

#### Add Feature

1. Create action
2. Enhance reducer
3. Connect component
4. Dispatch action
