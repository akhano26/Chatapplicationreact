import { BsSend } from "react-icons/bs";
import useSendMessages from "../../hooks/useSendMessages";
import { useState } from "react";

const MessageInput = () => {
            const [message,setmessage]=useState('')
     const {loading,sentmessage}=useSendMessages();

      const handlesendmessage=async(e)=>{
        e.preventDefault();
        sentmessage(message);
}
	return (
		<form onSubmit={handlesendmessage} className='px-4 my-3'>
			<div className='w-full relative'>
				<input
					type='text'
					value={message}
					onChange={(e)=>setmessage(e.target.value)}
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					{loading?<span className="loading loading-spinner"></span>:<BsSend />}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;