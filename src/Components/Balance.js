import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const Balance = () => {

    const { transactions } = useContext (GlobalContext)
    const amounts = transactions.map( trans => trans.transactionAmount )
    const total = amounts.reduce ((acc, item) => (acc += item), 0 ).toFixed(2) ;

    console.log(amounts) ;

    return (
        <div>
            <div className="balance">
                <h4>  Current Balance </h4>
                <h1> $ {total} </h1>
            </div>
            
        </div>
    )
}
