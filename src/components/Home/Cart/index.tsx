import CartItem from "../CartItem";
import Button from "../../Shared/Button";
import {useAppSelector} from "../../../app/hooks/useAppSelector.ts";

export default function Cart() {

    const cartItems = useAppSelector(state => state.dish.cart);

    const getContent = () => {
        if(cartItems.length === 0) {
            return (
                <div className='w-full h-full flex items-center flex-col justify-center'>
                    <h3 className='text-2xl mb-2'> Cart is empty </h3>
                    <div className='flex items-center gap-2'>
                        <p> Press </p>
                        <p className='sm-btn text-lg text-white bg-orange-500 w-[20px] h-[20px] flex items-center justify-center rounded-full'>+</p>
                        <p> to add to cart</p>
                    </div>

                </div>
            )
        } else {
            return cartItems.map((cartItem) => {
                return (<CartItem key={cartItem.name} {...cartItem}/>)
            })
        }
    }

    return(
        <div className='bg-white bg-opacity-60 rounded-3xl w-full p-6 h-full'>
            <div className='border-b mb-6'>
                <h1 className='pb-6 font-bold text-2xl playfair-font'>My Cart</h1>
            </div>
            <div className='max-h-[550px] overflow-y-scroll pb-10 px-5'>
                <div className='flex flex-col gap-5 overflow-visible'>
                    {getContent()}
                </div>
            </div>

            <div className='relative mt-8 flex items-end justify-center w-full'>
                <Button className={`${cartItems.length>0 ? '': 'disabled' }`} >Checkout</Button>
            </div>
        </div>
    )
}


