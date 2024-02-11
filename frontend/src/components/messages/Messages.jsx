
import useSetMessages from "../../hooks/useSetMessages";
import MessageSkeleton from "../skeleton/Messageskelaton";
import Message from "./Message";

const Messages = () => {
const {messages,loading}	=useSetMessages();
console.log("Lora Mera: ",messages?.conversation?.messages)
	return (
		<div className='px-4 flex-1 overflow-auto'>
{!loading && messages?.conversation?.messages?.length > 0 ? (
  messages?.conversation.messages.map((message) => {
		return(
    <Message key={message._id} message={message} />
       ) } )
) : (
  <div>Main hun yahan</div>
)}
      {loading &&[...Array(3)].map((_,index)=><MessageSkeleton key={index}/>)}
			{!loading && messages.error&& (
  <p className='text-center text-white'>Sent a message to start a Conversation</p>
)}
		</div>
	);
};
export default Messages;