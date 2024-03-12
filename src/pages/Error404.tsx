import burgerAnimation from '../lotties/burger.json';
import Lottie from 'react-lottie';
import Button from "../components/Shared/Button";
import {useNavigate} from "react-router-dom"

export default function Error404() {

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: burgerAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <div className='max-w-dvw min-h-dvh flex flex-col items-center justify-center'>
            <div className='flex mb-10'>
                <img alt='4' className='h-[350px]' src='/assets/4.png'/>
                    <Lottie height={350} options={defaultOptions} />
                <img alt='4' className='h-[350px]' src='/assets/4.png'/>
            </div>
            <div className='flex flex-col items-center gap-7'>
                <h1 className='text-6xl playfair-font font-bold'>Page Not Found</h1>
                <p className='text-gray-500 font-bold playfair-font text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis viverra laoreet lorem diam sed egestas tincidunt dolor.</p>
                <Button onClick={backToHome}>Back to home</Button>
            </div>
        </div>
    )
}