import React, { createContext, useReducer }  from "react";
import AppReducer from "./AppReducer";

//create initial states
const initialState = {
    transactions :[
        {id : 1, description : "income 1", transactionAmount : 1000 }
        ,{id : 2, description : "expense 1", transactionAmount : -100 }
        ,{id : 3, description : "income 2", transactionAmount : 500 }
        ,{id : 4, description : "expense 2", transactionAmount : -200 }
    ]
}

// create the Global Context
export const GlobalContext = createContext (initialState) ;

// Create a provider
export const GlobalProvider = ({children})=> {

    // function deleteTransaction (id) {
    //     dispatch ( {
    //         type: 'DELETE-TRANSACTION'
    //         ,Payload: id
    //     } ) ;
    // }

    const [state] = useReducer(AppReducer , initialState)

    return(
        <GlobalContext.Provider value= { 
        {transactions: state.transactions} 
        // ,deleteTransaction 
        }>  
        {children}
        </GlobalContext.Provider>
    )
}