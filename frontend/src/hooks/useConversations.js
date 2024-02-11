import { useEffect, useState } from "react"
import toast from "react-hot-toast"

function useConversations() {
 const [loading,setloading]= useState(false)
 const [converssations,setconversations]=useState([])


 useEffect(()=>{

const getConversations=async()=>{
   setloading(true)

try{
  const res=await fetch('/api/user')
  const data=await res.json()
  
  if(data.error){
    throw new Error(data.error)
  }

setconversations(data)

}catch(error){
  console.log(error.message)
  toast.error(error.message)
}
finally{
  setloading(false)
}}
getConversations()
 },[])
 
 return {loading,converssations}
}

export default useConversations