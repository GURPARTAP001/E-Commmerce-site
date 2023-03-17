import React,{createContext,useContext,useReducer} from "react";

//The below line prepare the data layer
 export const StateContext=createContext();
//The below line wrap our content into the data layer and prepare the data layer
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//The below line help us to pull the content out of the data layer
export const useStateValue=()=>useContext(StateContext);