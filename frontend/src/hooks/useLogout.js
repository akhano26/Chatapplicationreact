import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { AuthContext } from "../context/Authcontext"


function useLogout() {
const [loading,setloading] =useState(false)
const {setauthuser}=useContext(AuthContext)
const logout=async()=>{
setloading(true)
try{
const res=await fetch("/api/auth/logout",{
  method:"POST",
  headers:{"Content-Type":"application/json"}
})
const data= await res.json()
if(data.error){
  throw new Error(data.error)
}
localStorage.removeItem("chat-user")
setauthuser(null)
}
catch(error){
  toast.error(error.message)
}
finally{
  setloading(false)
}

}
return {logout,loading}
}

export default useLogout