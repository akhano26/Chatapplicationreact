import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";


function useSetMessages() {
  
 const [loading,setloading]= useState('false');
 
 const { selectedConversation,setMessages,messages}=useConversation();

useEffect(()=>{
setloading(true)
const getmessages=async()=>{
try{

//${selectedConversation._id}
const res=await fetch(`/api/message/${selectedConversation._id}`)
const data=await res.json();

setMessages(data);
setloading(false)
}
catch(error){
  toast.error(error.message)
}
finally{
  setloading(false)
}
}

if(selectedConversation?._id) getmessages()

},[selectedConversation._id])

return {messages,loading}

}

export default useSetMessages