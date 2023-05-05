import React, { useState } from 'react';
import './NewExpense.css';
import moment from 'moment/moment';


const NewExpense = (props) => {

    const [title, settitle] = useState('');
    const [amount, setamount] = useState('');
    const [date, setdate] = useState('');



    function titlechangehandler(event) {
        settitle(event.target.value);
    }

    function amountchangehandler(event) {
        setamount(event.target.value);
    }

    function datechangehandler(event) {
        setdate(event.target.value);
    }

    function AddExpense(event) {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
            id: Math.random().toString()
        }


        props.onAddExpense(expenseData);
    }

    return (
        <>
            <div className="new-expense">

                <form onSubmit={AddExpense}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type='text' value={title} onChange={titlechangehandler}></input>
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type='text' value={amount} onChange={amountchangehandler}></input>
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type='date' value={date} onChange={datechangehandler}></input>
                        </div>
                        <div className='new-expense__actions'>
                            <button type='submit'>Add Expense</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewExpense;