import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const AccSummery = () => {

    const { transactions } = useContext (GlobalContext)
    const amounts = transactions.map( trans => trans.transactionAmount )

    const Income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const Expense = (
    amounts.filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);

    return (
        <div className= "inc-exp-container">
            <div>
                <h4> Income </h4>
                <p className="money plus"> $ {Income} </p>
            </div>
            <div>
                <h4> Expensee </h4>
                <p className= "money minus"> $ {Expense} </p>
            </div>
        </div>
    )
}
