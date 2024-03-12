import Button from "../components/Shared/Button";
import {useNavigate} from "react-router-dom";

export default function Error500() {

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    return(
        <div className='max-w-dvw min-h-dvh flex flex-col items-center justify-center'>
            <div className='flex'>
                <img alt='5' className='max-h-[350px]' src='/assets/5.png'/>
                <img alt='c1' className='max-h-[350px]' src='/assets/cookie-1.png'/>
                <img alt='c2' className='max-h-[350px]' src='/assets/cookie-2.png'/>
            </div>
            <div className='flex flex-col items-center mt-10 gap-7'>
                <h1 className='text-6xl playfair-font font-bold'>Internal Server Error</h1>
                <p className='text-gray-500 font-bold playfair-font text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis viverra laoreet lorem diam sed egestas tincidunt dolor.</p>
                <Button onClick={backToHome}>Back to home</Button>
            </div>
        </div>
    )
}