import React, {useContext} from 'react' // Add 
import { GlobalContext } from '../Context/GlobalState';

export const Transaction = ( {transaction} ) => {

    const sign = transaction.transactionAmount < 0 ? '-' : '+';

    const { deleteTransaction } = useContext(GlobalContext);

    return (
            <li className= { transaction.transactionAmount > 0 ? 'plus' : "minus" }>
                {transaction.description}
                <span>{sign}$ {Math.abs(transaction.transactionAmount)}</span>
                <button 
                onClick= {()=> { deleteTransaction (transaction.id) }} 
                className="delete-btn">X</button>
            </li>
    )
}
