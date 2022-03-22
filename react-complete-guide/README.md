### Rules of Hooks

____

1. Only call React Hooks in __React Functions__:
    1. React Component Functions
    2. Custom Hooks
2. Only call React Hooks at the __Top Level__:
    1. Don't call them in nested functions
    2. Don't call them in any block statements
3. Extra rule for useEffect(): __ALWAYS__ add everything you refer to inside of useEffect() as a dependency!