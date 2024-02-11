import { createContext, useState } from "react";

export const AuthContext=createContext()


export const AuthContextProvider=({children})=>{
const [authUser,setauthuser]=useState(JSON.parse(localStorage.getItem("chat-user"))||null)

  return(
    <AuthContext.Provider value={{authUser,setauthuser}} >
{children}
    </AuthContext.Provider>
  )
}