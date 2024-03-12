import {RiHeart3Line} from "react-icons/ri";
import {BsReply} from "react-icons/bs";

export default function Comment() {
    return(
        <div className='flex p-6'>
            <div className='w-[56px]'>
                <img alt='feed-user' src='/assets/feed-user-2.png' className='rounded-full' width={56} height={56}/>
            </div>
            <div className='ps-2'>
                <p className='font-semibold'>Paul Molieve</p>
                <p className='text-gray-400 font-light mb-1'> Lorem ipsum dolor sit amet, consectetur elit. </p>
                <div className='flex gap-5 items-center text-amber-600'>
                    <p className='inline me-2'><RiHeart3Line className='inline'/> Like</p>
                    <p className='inline me-2'><BsReply className='inline text-lg'/> Reply </p>
                    <p className='inline me-2'> Translate </p>
                    <p className='inline text-gray-400 text-sm font-light'> 5 min </p>
                </div>
            </div>
        </div>
    )
}