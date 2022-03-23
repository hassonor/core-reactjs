import React from 'react';
import styles from "./Input.module.css";

type content = {
    label: string,
    input: any
}

const Input = React.forwardRef<HTMLDivElement, content>((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    )
});

export default Input;