
import useConversations from "../../hooks/useConversations";
import Conversation from "./Conversation";
import {getRandomEmoji} from '../../utils/Emojis.js'
const Conversations = () => {
const {loading,converssations}=	useConversations()
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{	converssations.map((converssation,index)=>{
				return(
					<Conversation
					key={converssation._id}
					conversation={converssation}
emoji={getRandomEmoji()}
lastIdx={index===converssations.length-1}
					/>)
				})}
			{loading?<span className="loading loading-spinner"></span>:''}
		</div>
	);
};
export default Conversations;