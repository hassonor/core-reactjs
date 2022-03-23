import React, {SyntheticEvent, useRef, useState} from 'react';
import styles from './MealItemForm.module.css';
import Input from "../../UI/Input/Input";

const MealItemForm = (props:any)=>{

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef<HTMLInputElement | null>(null);
    const inputsAttrToChildren = {
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '100',
        step: '1',
        defaultValue: '1'
    };

    const submitHandler = (event:SyntheticEvent) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 100){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };

    return (<form className={styles.form} onSubmit={submitHandler}>
        <Input
            {...{ label: "Amount", input: inputsAttrToChildren }} ref={amountInputRef}/>
        <button>+Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-100).</p>}
    </form>)
};


export default MealItemForm;