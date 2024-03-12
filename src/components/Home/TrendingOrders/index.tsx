import {RiArrowRightSLine} from "react-icons/ri";
import TrendingCard from "../TrendingCard";
import {useAppSelector} from "../../../app/hooks/useAppSelector.ts";

export default function TrendingOrders() {

    const trends = useAppSelector(state => state.dish.trends);

    return(
        <div className='ps-10 w-2/3'>
            <div className='flex items-center justify-between pe-4'>
                <h1 style={{fontSize: "40px"}} className='playfair-font font-bold my-6'> Trending Orders</h1>
                <div className='flex gap-2'>
                    <p>View All</p>
                    <RiArrowRightSLine
                        className='bg-[var(--primary-color)] rounded-full p-0.5 w-[24px] h-[24px] text-white arrow-icon'/>
                </div>
            </div>
            <div style={{gridTemplateColumns: "repeat(auto-fill, minmax(337px, 1fr))"}} className='grid gap-5'>
                {
                    trends.map((trend)=>{
                        return <TrendingCard {...trend} key={trend.name}/>
                    })
                }
            </div>
        </div>
    )
}