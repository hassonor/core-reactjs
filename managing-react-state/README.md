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
