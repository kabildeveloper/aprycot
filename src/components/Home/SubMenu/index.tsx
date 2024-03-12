import "./SubMenu.css";
import {Rating} from 'react-simple-star-rating'
import {addToCart, Dish} from "../../../features/dish/dishSlice.ts";
import {useAppDispatch} from "../../../app/hooks/useAppDispatch.ts";

export default function SubMenu(props: Dish) {

    const dispatch = useAppDispatch();

    const onAdd = () => {
        dispatch(addToCart(props))
    }

    return(
        <div className='sub-menu'>
            <div className='sub-menu-img-container'>
                <img width={170} height={170} alt='dish' src={`assets/${props.imgPath}`}/>
            </div>
            <div className='sub-menu-content'>
                <div>
                    <p className='font-semibold'>{props.name}</p>
                    <div className='w-full'>
                        <Rating SVGstyle={{display: "inline-block"}} size={16} initialValue={props.rating}  fillClassName='rating-fill' />
                    </div>
                </div>
                <div className='sub-menu-action-bar'>
                    <p className='value font-semibold text-[var(--primary-color)]'>{`$${props.price}`}</p>
                    <p onClick={onAdd} className='sm-btn text-lg text-white bg-orange-500 w-[20px] h-[20px] flex items-center justify-center rounded-full cursor-pointer'>+</p>
                </div>
            </div>
        </div>

    )
}