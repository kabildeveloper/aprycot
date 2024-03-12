import "./TrendingCard.css";
import {addToCart, Trend} from "../../../features/dish/dishSlice.ts";
import {useAppDispatch} from "../../../app/hooks/useAppDispatch.ts";

export default function TrendingCard(props: Trend) {

    const dispatch = useAppDispatch();

    const onAdd = () => {
        dispatch(addToCart(props))
    }

    return(
        <div className='relative trending-card-wrapper'>
            <div className='trending-card bg-white h-[237px] me-[50px] rounded-3xl flex flex-col justify-between p-6'>
                <p className='text-sm'>👑 {props.trend}</p>
                <p className='font-semibold'>{props.name}</p>
                <div className='text-gray-500'>
                    <p className='text-sm text-inherit'>{props.calories} Calories</p>
                    <div className='border-b w-1/4 my-[7px]'/>
                    <p className='text-sm text-inherit'>{props.persons} Persons</p>
                </div>
                <div className='action-bar flex gap-4 text-[var(--primary-color)]'>
                    <p className='font-semibold text-inherit'>$ {props.price}</p>
                    <p onClick={onAdd} className='cursor-pointer sm-btn text-lg text-white bg-orange-500 w-[20px] h-[20px] flex items-center justify-center rounded-full'>+</p>
                </div>
            </div>
            <img
                width={148}
                height={148}
                alt='cart-item-img'
                className='absolute w-[148px] h-[148px] z-10 rounded-full shadow-orange-200 shadow-xl right-0 top-[calc(50%-74px)]'
                src={`/assets/${props.imgPath}`}
            />
        </div>
    )
}