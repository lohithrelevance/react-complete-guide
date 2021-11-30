import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">

        {/* onSaveExpenseData is just a name to pull data from child(ExpenseForm) */}
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}>
        </ExpenseForm>
    </div>;
}

export default NewExpense;