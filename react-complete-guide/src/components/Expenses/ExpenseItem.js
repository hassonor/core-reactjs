import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem({title, date, amount}) {
    const [titleFromParent, setTitle] = useState(title)

    const clickHandler = () => {
        setTitle('Updated Title');
        console.log("Change Title Clicked!")
    }
    return (
        <Card className='expense-item'>
            <div>
                <ExpenseDate date={date}/>
            </div>
            <div className='expense-item__description'>
                <h2>{titleFromParent}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;