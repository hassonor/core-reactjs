### Synthetic Events

________________________________________________________________

* Similar to browser's native event system.
* Assures events operate consistently cross-browser.
* Improves performance.

### When Does React Render?

________________________________________________________________

* State change -> Can skip render via: shouldComponentUpdate / React.Memo
* Prop change -> Can skip render via: shouldComponentUpdate / React.Memo / PureComponent
* Parent renders -> Can skip render via: shouldComponentUpdate / React.Memo / PureComponent
* Context change

### Ways to Handle API Calls

1. Inline -> Call fetch/Axios/etc in your component (Not recommended).
2. Centralized functions -> Call separate function
3. Custom hook -> Create and call your own custom hook

### Where to Declare State

* Common mistake: Declaring state in the wrong spot.
* Sign: Hard to consume and share
* Suggestion: Start local, and lift when needed.
* Principle of The Least Privilege: Every module must be able to access only the information and resources that
  necessary for its legitimate purpose. -> Ideally each React component only has access to the data/functions it needs.

### State: Start Local

1. Declare state in the components that needs it.
2. Child components need the state? Pass state down via props.
3. Non-child components need it? Lift state to common parent.
4. Passing props getting annoying? Consider Context, Redux, etc.

### Use Function From Reference Existing State

const [count, setCount] = useState(0);<br/>
// Avoid since unreliable<br/>
setCount(count + 1)<br/><br/>
// Prefer this - Use a function reference existing state<br/>
setCount((count) => count + 1);

### XState

* Open Source Finite State Machine
* Key benefits over simple state enums:
    * Enforce state transitions
        * Declare how and when your app moves between states
        * Protects from invalid transitions
    * State charts

## What is a Ref?

___

* Reference an HTML element
* Store a value that's stable between renders
* Can mutate the ref's value directly
* Don't cause a re-render when they change

### When to Use a Ref?

* DOM element reference
* State that isn't rendered/doesn't change
* "Instance variables" in func components:
    * Keep data between renders
    * Storing a previous value
    * Track if component is mounted
    * Hold HTTP request cancel token
    * Reference a 3rd party library instance
    * Debounce a call / declare local cache
    * Store value used in useEffect

## Why to use useReducer?

________________________________________________________________

* Extract
* Reuse
* Unit test
* Scalability

### useState vs useReducer

________________________________________________________________

* useState:
    * Easy to implement for most scenarios
    * Easy to learn
* useReducer:
    * More scalable for complex scenarios:
        * Many complex state transitions
        * Multiple sub-values
        * Next state depends on the previous one
    * Reason about state in isolation
    * Testable in isolation
    * Reusable

###
  