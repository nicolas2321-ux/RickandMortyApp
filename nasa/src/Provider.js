import  {createContext,useState} from 'react';


const searchContext = createContext();

export function searchProvider({children}){
    let [name,setName] = useState("rick")
    
    
    return (<searchContext.Provider
    value= {{name,setName}}
    >{children}</searchContext.Provider>)
}

export default searchContext