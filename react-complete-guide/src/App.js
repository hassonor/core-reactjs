import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2021, 7, 14),
        },
        {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12)},
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2022, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2022, 3, 12),
        },
    ];

    const addExpenseHandler = expense => {
        console.log('In App.js');
        console.log(expense);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;