import { createContext, useState } from "react";



export const UserContext=createContext(null)

const UserProvider = ({children})=>{

    const [name,setName]=useState('john')
    const [email,setEmail]=useState('john@gmail.com')

    
    
    return <UserContext.Provider value={{name,email,setName}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider
