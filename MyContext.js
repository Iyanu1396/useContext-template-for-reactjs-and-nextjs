"use client" // for nextJs

import { createContext, useContext, useState } from "react"



const MyContext = createContext()
function MyProvider({children}){
  const [anydata , setAnydata] = useState(null)
 

  return <MyContext.Provider value={{anydata, setAnydata}}>
    {children}
  </MyContext.Provider>
}

function useMy(){
  const context = useContext(MyContext)

  if(context === undefined) 
    
    throw new Error("context was used outside provider")

  return context
}

export {MyProvider , useMy}


//to use value in components

const {anydata, setAnydata} = useMy()

// to use provider in components

<MyProvider>
  {/* compnents */}
  </MyProvider>