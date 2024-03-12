import {RiHeart3Line, RiMessageLine} from "react-icons/ri";
import {BsShare} from "react-icons/bs";

export default function FeedActionBar() {
    return (
        <div className='flex justify-between p-4 text-sm items-center'>
            <div className='flex gap-4 items-center'>
                <p className='inline me-2'><RiHeart3Line className='text-2xl inline'/> Like</p>
                <p className='inline'><RiMessageLine className='text-2xl inline'/> 140</p>
            </div>
            <p className='inline text-amber-600'><BsShare className='text-xl inline'/> 99 Share</p>
        </div>
    )
}