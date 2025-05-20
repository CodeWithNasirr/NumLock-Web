import { createContext, useEffect, useState } from "react";


export const Context = createContext();
  
const ContextProvider = (props) => {
    const [visible,setVisble]=useState(false)

    const value = {
      visible,setVisble  
    }
  
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )


}

export default ContextProvider;