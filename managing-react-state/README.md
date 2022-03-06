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

