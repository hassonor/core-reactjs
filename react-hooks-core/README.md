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



