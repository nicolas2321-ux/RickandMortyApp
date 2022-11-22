import  {createContext,useState} from 'react';


export const searchContext = createContext();

export function searchProvider({children}){
    let [char,setName] = useState("rick")
    
    
    return (
    <searchContext.Provider value= {{char,setName}}>{children}</searchContext.Provider>)
}

