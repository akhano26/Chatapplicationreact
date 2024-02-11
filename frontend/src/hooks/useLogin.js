import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { AuthContext } from "../context/Authcontext"

function useLogin() {
  const [loading,setloading]=useState(false)
const {setauthuser}=useContext(AuthContext)
  const login=async(username,password)=>{
   

    const success= handleinputerror(username,password);
    if(!success) return
    try{
      setloading(true)
const res=await fetch('/api/auth/login',{
  method:'POST',
  headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})
const data=await res.json()
if(data.error){
  throw new Error(data.error)
}
console.log(data)
localStorage.setItem('chat-user',JSON.stringify(data))
setauthuser(data)
    }
    catch(error){
    toast.error(error.message)
    }
    finally{
      setloading(false)
    }

  }

  return {login,loading}


}

export default useLogin


const  handleinputerror=(username,password)=>{
if(!username || !password){
  toast.error("Kindly fill username or password");
  return false
}
// if(password.length<6){
//   toast.error("Kindly write the complete password")
//   return false
// }
return true
}