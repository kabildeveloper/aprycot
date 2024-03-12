import {BiCaretDown} from "react-icons/bi";

export default function FeedHeader() {
    return (
        <div className='flex justify-between px-4'>
            <div className='flex justify-between'>
                <img alt='feed user' src='/assets/feed-user-1.png' className='rounded-full' width={75} height={75}/>
                <div className='flex flex-col justify-center ms-4'>
                    <p className='font-semibold'>Wade Warren</p>
                    <small className='text-sm text-amber-600'>colleages</small>
                </div>
            </div>
            <div className='flex items-center'>
                <small className='text-xs'>28 mins</small>
                <BiCaretDown/>
            </div>
        </div>
    )
}