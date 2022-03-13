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

### Async in Redux

________________________________________________________________

#### Why a Mock API?

* Start before the API exists
* Independence
* Backup plan
* Ultra-fast
* Test slowness
* Aids testing
* Pint to the real API later

### Redux Middleware

* Action -> Middleware (We can write out custom logic that runs here) -> Reducer
* Handling async API calls
* Logging
* Crash reporting
* Routing

#### Custom Logger Middleware

Logs all actions and states after they are dispatched.<br/>
**Example**:

````
const logger = store = next  => action => {
console.group(action.type)
console.info('dispatching',action)
let result = next(action)
console.log('next state', store.getState())
console.groupEnd()
}
````

#### Redux Async Libraries

* `redux-thunk` - Returns functions from action creators
    * Functions
    * Clunky to test
    * Easy to learn
* `redux-saga` - Use generators
    * Generators
    * Easy to test
    * Hard to learn
* `redux-promise` - Use promises for async
* `redux-observable` - Use RxJS observables

#### Why Use Async Middleware?

* Consistency
* Purity
* Easier testing

## Test Frameworks

________________________________________________________________

* Jest
* Mocha
* Jasmine
* Tape
* AVA

#### React Test Utils: Two Rendering Options

* **shallowRender**:
    * Render single component
    * No DOM Required
    * Fast and Simple
      <br/><br/>
* **renderIntoDocument**:
    * Render component and children
    * DOM Required

#### React Test Utils: DOM Interactions

* **findRenderedDOMComponentWithTag**
* **scryRenderedDOMComponentWithTag**
* **Stimulate**
    * Clicks
    * Keypresses
    * Etc.
* See More: https://reactjs.org/docs/test-utils.html

#### Enzyme

________________________________________________________________

* **findRenderedDOMComponentWithTag** -> **find**
* **scryRenderedDOMComponentWithTag** -> **find**
* **scryRenderedDOMComponentWithClass** -> **find**

#### Enzyme is An Abstraction

* **Behind the scenes**:
    * React Test Utils
    * JSDOM (In-memory DOM)
    * Cheerio (Fast jQuery style selectors)

#### Enzyme render

Two ways to render a React component for testing with Enzyme:

1. __shallow__ - Renders single component
    1. No DOM is created.
    2. No child components are rendered.
2. __mount__ - Renders component with children
    1. DOM is created in memory via JSDOM
    2. Child components are rendered

