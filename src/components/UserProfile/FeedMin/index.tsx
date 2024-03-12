import FeedHeader from "../../Shared/FeedHeader";
import FeedActionBar from "../../Shared/FeedActionBar";
import FeedInput from "../../Shared/FeedInput";

export default function FeedMin() {
    return(
        <div className='bg-white bg-opacity-60 p-6 rounded-3xl'>
            <FeedHeader/>
            <div className='p-6 border-b border-[var(--primary-border)]'>
                <p className='text-gray-400 font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque
                    ultricies eget adipiscing condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.
                </p>
            </div>
            <FeedActionBar/>
            <FeedInput/>
        </div>
    )
}