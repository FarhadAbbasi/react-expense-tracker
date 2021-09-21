import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3> Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor='description'> Description </label>
                    <input type="text" 
                            id= "description" 
                            placeholder="Detail of Transaction"></input>

                </div>

                <div className="form-control">
                    <label htmlFor='transaction'> Transaction </label>
                    <input type="number" 
                            id= "transactionamount" 
                            placeholder="Enter Transaction Amount"></input>

                </div>
                <button className="btn"> Add Transaction </button>
            </form>

        </div>
    )
}
