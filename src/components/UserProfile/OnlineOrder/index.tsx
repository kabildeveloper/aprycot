import OnlineOrderItem from "./OnlineOrderItem";
import {Orders} from "../../../types/Orders.ts";


export default function OnlineOrder(props: {heading: string, orders: Orders[], hideValue?: boolean}) {
    return (
        <div className='bg-white p-6 rounded-3xl mt-10 bg-opacity-60'>
            <div className='border-b'>
                <h1 className='pb-6 font-bold text-2xl playfair-font'>{props.heading}</h1>
            </div>
            <div>
                {props.orders.map((order, i)=>{
                   return(
                       <OnlineOrderItem {...order} hideValue={props.hideValue} key={i}/>
                   )
                })}
            </div>
        </div>
    )
}