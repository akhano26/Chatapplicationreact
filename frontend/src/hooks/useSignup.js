import  { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../context/Authcontext';

function useSignup() {
 const [loading,setloading] =useState(false);

const {authuser,setauthuser}=useContext(AuthContext)
console.log(authuser)
 const signup=async({ name,username , password,conformpassword,gander})=>{
const checkerror=handleInputErrors(name,username , password,conformpassword,gander)
if(checkerror) return

setloading(true)
console.log("Yaan pr hun bhai 0")
try{
  
  console.log(JSON.stringify({name,username , password,conformpassword,gander}))
const res=await fetch('/api/auth/signup',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({name,username , password,conformpassword,gander})
})
console.log("Yaan pr hun bhai 2")
const data=await res.json();
console.log(data);
if(data.error){
  throw new Error(data.error)
}
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

 return {signup,loading}
}

export default useSignup


const handleInputErrors=(fullname,username , password,conformpassword,gander)=>{
  if(!fullname || !username || !password ||!conformpassword ||!gander){
    toast.error("Please fill all fields")
    return false
  }
  if(password!==conformpassword){
    toast.error("Password doesn't match")
    return false
  }
  if(password.length<6){
    toast.error("Password must be of six characters")
    return false
  }

}