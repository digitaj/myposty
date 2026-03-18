
import { createContext } from "react";


// stage onecreate a context
export const AppNameContext = createContext();

// stage two : create a provider: a is a super component that can provide 
// any component that are its children with whatever he has
export const AppNameProvider = ({children}) =>{
    const appname = "Invento App";
   
   
   return (<AppNameContext.Provider  value={{appname:appname}}>
          {children}
    </AppNameContext.Provider>)

}