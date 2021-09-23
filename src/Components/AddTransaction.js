import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';


export const AddTransaction = () => {

    const [description, setDescription] = useState() ;
    const [transactionAmount, setTransactionamount] = useState() ;
    const {addTransaction} = useContext(GlobalContext) ;  

    const onsubmit= (e)=> {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
    }


    return (
        <div>
            <h3> Add New Transaction</h3>
            <form onSubmit={onsubmit}>

                <div className="form-control">
                    <label htmlFor='description'> Description </label>
                    <input type="text" 
                            id= "description" 
                            placeholder="Detail of Transaction"
                            value= {description}
                            onChange={(e)=> setDescription(e.target.value)}
                            />

                </div>

                <div className="form-control">
                    <label htmlFor='transaction'> Transaction </label>
                    <input type="number" 
                            id= "transactionamount" 
                            placeholder="Enter Transaction Amount"
                            value= {transactionAmount}
                            onChange={(e)=> setTransactionamount(e.target.value)}
                            />


                </div>
                <button className="btn"> Add Transaction </button>
            </form>

        </div>
    )
}
