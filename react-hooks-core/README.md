# Using React Hooks

________________________________________________________________

### The Commonly Used React Hooks

* useState
* useRef
* useEffect

#### useRef: primarily used to allow access directly to an element in the DOM.

### Class and Functional Components Compared

* React Class Component (rcc):
    * componentDidMount(){...}
    * componentDidUpdate(){...}
    * componentWillUnmount(){...}
      <br/><br/>
* React Functional Component(rfc):
    * useEffect(()=>{...}) (both for componentDidMount and componentDidUpdate)
    * useEffect(()=> {...return()=>{...}} (equal to componentWillUnmount)

### More React Hooks

* useContext
* useReducer
* useCallback
* useMemo

### Redux

Redux can be thought of as a central store that holds an entire applications state. Each of the app components can
access the stored state without requiring passing data or functions from one component to another.


