import React from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const Transaction = ( {transaction} ) => {

    const sign = transaction.transactionAmount < 0 ? '-' : '+';

    // const {deleteTransaction} = useContext(GlobalContext) ;

    return (
            <li className= { transaction.transactionAmount > 0 ? 'plus' : "minus" }>
                {transaction.description}
                <span>{sign}$ {Math.abs(transaction.transactionAmount)}</span>
                <button 
                className="delete-btn"
                // onClick= {()=> deleteTransaction (transaction.id) } 
                >X</button>
            </li>
    )
}
