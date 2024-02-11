import { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

function useSendMessages() {
 const [loading,setloading]=useState(false);
 const { selectedConversation,setMessages}=useConversation()

 const sentmessage=async(message)=>{
  const issuccess= handlemessageerror(message);
  if(!issuccess) return
setloading(true)
try{
const res= await fetch(`/api/message/send/${selectedConversation._id}`,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({message})
})
const data= await res.json();
if(data.error){
  throw new Error(data.error)
}
setMessages(data)

console.log(data);
}
catch(error){
  toast.error(error.message)
}
finally{
  setloading(false)
}


 }
 return {loading,sentmessage}
}

export default useSendMessages


const handlemessageerror=(message)=>{
  if(!message){
    toast.error("Kindly wite something in message.....")
    return false
  }
  return true
}