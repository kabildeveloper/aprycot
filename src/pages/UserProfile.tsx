import UserBanner from "../components/UserProfile/UserBanner";
import News from "../components/UserProfile/News";
import Feed from "../components/UserProfile/Feed";
import OnlineOrder from "../components/UserProfile/OnlineOrder";
import {useState} from "react";
import {Orders} from "../types/Orders.ts";
import FeedMin from "../components/UserProfile/FeedMin";
import About from "../components/UserProfile/About";
import Suggestions from "../components/UserProfile/Suggestions";
import OfferCard from "../components/UserProfile/OfferCard";

export default function UserProfile() {

    const [profileInsights] = useState<Orders[]>(
        [{
            title: 'Timeline', value: 1
        }, {
            title: 'Reviews', value: 1
        },{
            title: 'Photos', value: 1
        },{
            title: 'Followers', value: 1
        },{
            title: 'Bookmarks', value: 1
        },{
            title: 'Achievements', value: 1
        },{
            title: 'Blogs', value: 1
        }]
    );

    const [onlineOrders] = useState<Orders[]>(
        [{
            title: 'Favourite order', value: 1
        }, {
            title: 'Order history', value: 1
        },{
            title: 'My address', value: 1
        }]
    );




    return(
            <main>
                <UserBanner/>
                <div className='flex w-full gap-10 mt-10'>
                    <div className='w-[30%]'>
                        <News/>
                        <OnlineOrder heading={'Profile Insights'} orders={profileInsights}/>
                        <OnlineOrder heading={'History'} hideValue orders={onlineOrders}/>
                    </div>
                    <div className='w-[47%]'>
                        <Feed/>
                        <FeedMin/>
                    </div>
                    <div className='w-[23%]'>
                        <About/>
                        <Suggestions/>
                        <OfferCard/>
                    </div>
                </div>
            </main>
    )
}