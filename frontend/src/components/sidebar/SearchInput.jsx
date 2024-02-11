

import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import useConversations from "../../hooks/useConversations";

const SearchInput = () => {
	const [search,setsearch]=useState('')
	const {setselectedConversation}=useConversation();
	const {converssations}=useConversations()
	const handlesearch=(e)=>{
e.preventDefault();

if(!search) return
if(search.length<3){
	toast.error('wirte the complete name');
}
const conversation= converssations.find((e)=>e.fullname.toLowerCase().includes(search.toLowerCase()))

if(conversation){
	setselectedConversation(conversation)
}else{
	toast.error('No such user found')
}


	}
	return (
		<form onSubmit={handlesearch} className='flex items-center gap-2'>
			<input value={search} onChange={(e)=>{setsearch(e.target.value)}} type='text' placeholder='Search…' className='input input-bordered rounded-full' />
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;