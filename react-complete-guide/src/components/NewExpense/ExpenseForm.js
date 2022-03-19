import './ExpenseForm.css';
import {useState} from "react";


const ExpenseForm = ({onSaveExpenseData}) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");

    const titleChangeHandler = (event) => {
        setInputTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate).toISOString()
        }
        onSaveExpenseData(expenseData);
        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    }


    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={inputTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' onChange={amountChangeHandler}
                       value={inputAmount} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler}
                       value={inputDate} min='2019-01-01' max="2023-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};


export default ExpenseForm;