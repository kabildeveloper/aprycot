import Comment from "../Comment";
import FeedActionBar from "../../Shared/FeedActionBar";
import FeedHeader from "../../Shared/FeedHeader";
import FeedInput from "../../Shared/FeedInput";

export default function Feed() {
    return(
        <div className='bg-white bg-opacity-60 rounded-3xl p-6 mb-10'>
            <FeedHeader/>
            <div className='rounded-2xl mt-4 overflow-clip'>
                <img src='/assets/scene01.png' alt='scene'/>
            </div>
            <FeedActionBar/>
            <div className='p-6 border-y border-[var(--primary-border)]'>
                <p className='text-gray-400 font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.
                </p>
            </div>
            <div>
                <Comment/>
                <Comment/>
            </div>
            <div>
                <FeedInput/>
            </div>

        </div>
    )
}