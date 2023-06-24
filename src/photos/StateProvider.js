import React,{createContext,useContext,useReducer} from 'react'

//prepare the data layer
export const StateContext = createContext();

//esh se data liye index.js se
export const  StateProvider = ({reducer,initialState,children
    }) => (
    
        // StateContext mein data aa gya reducer se  
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {/* index.js mein jo child hai i.e App.js wo children hai yaha */}
        {children} 
    </StateContext.Provider>

);
//hook which allows us to pull information from the data layer

export const useStateValue = () => useContext(StateContext);    

