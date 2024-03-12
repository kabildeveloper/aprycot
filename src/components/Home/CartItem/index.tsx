import {deleteFromCart, ICartItem} from "../../../features/dish/dishSlice.ts";
import {useAppDispatch} from "../../../app/hooks/useAppDispatch.ts";

export default function CartItem(props: ICartItem) {

    const dispatch = useAppDispatch();
    const onClickDelete = () => {
        dispatch(deleteFromCart(props))
    }

    return (
        <div className='h-[112px]'>
            <img
                width={110}
                height={110}
                alt='cart-item-img'
                className='relative z-20 rounded-full shadow-orange-200 shadow-xl'
                src={`/assets/${props.imgPath}`}/>

            <div className='h-[98px] my-[7px] bg-[#FFF5EE] rounded-full relative top-[-100%] ms-[30px] '>
                <div className='ms-[100px] h-full flex items-center justify-between pe-8'>
                    <div>
                        <p className='font-semibold mb-2'>{props.name}</p>
                        <p><span className='text-[#EA6A12]'>x</span> {props.quantity}</p>
                    </div>
                    <div className='flex flex-col items-end'>
                        <img onClick={onClickDelete} className='mb-2' width={24} src='/assets/delete-icon.png' alt='Delete icon'/>
                        <p> $ {props.price * props.quantity} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}