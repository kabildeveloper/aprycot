import {BsCamera, BsEmojiSmile} from "react-icons/bs";

export default function FeedInput() {
    return (
        <div className='bg-transparent border rounded-full py-2 px-4 w-full flex'>
            <input className='flex-grow bg-transparent me-4 text-gray-600 font-extralight text-sm'/>
            <div>
                <BsEmojiSmile className='inline me-4'/>
                <BsCamera className='inline'/>
            </div>
        </div>
    )
}