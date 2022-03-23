import React, { useRef, useState} from 'react';
import styles from './MealItemForm.module.css';
import Input from "../../UI/Input/Input";

const MealItemForm = (props)=>{

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
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
        <Input  ref={amountInputRef}
                label="Amount" input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '100',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-100).</p>}
    </form>)
};


export default MealItemForm;