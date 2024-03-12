import Button from "../components/Shared/Button";
import {useNavigate} from "react-router-dom";

export default function EmailVerify() {

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    return (
        <div className='w-dvw h-dvh relative'>
            <div className='flex h-full items-center px-24'>
                <div className='w-1/3'>
                    <div className='w-full mb-3'>
                        <img alt='logo' src='/assets/main-logo.png'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-7 p-6'>
                        <img width={86} height={91} alt='success' src='/assets/success.png'/>
                        <h1 className='playfair-font font-bold text-4xl'>Success !</h1>
                        <p className='px-10 text-center text-gray-500'>A email has been send to your email@domain.com. Please check for an email from company and click on the included link to reset your password.</p>
                        <Button onClick={backToHome}>Back to home</Button>
                    </div>
                </div>
            </div>
            <img alt='email-bg' className='absolute top-0 right-0' src='/assets/email-bg.png'/>
        </div>
    )
}