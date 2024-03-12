import Button from "../components/Shared/Button";
import Timer from "../components/Shared/Timer";

export default function Maintenance() {

    return(
        <div className='min-w-dvw min-h-dvh flex flex-col items-center justify-center overflow-x-hidden'>
            <div className='grid grid-cols-3 [&>img]:h-[175px]'>
                <img alt='m1' src='/assets/m1.png'/>
                <img alt='m2' src='/assets/m2.png'/>
                <img alt='m3' src='/assets/m3.png'/>
                <img alt='m4' src='/assets/m4.png'/>
                <img alt='m5' src='/assets/m5.png'/>
                <img alt='m6' src='/assets/m6.png'/>
            </div>
            <div className='flex flex-col items-center mt-10 gap-7'>
                <h1 className='text-6xl playfair-font font-bold'>Hang on! We are under maintenance</h1>
                <p className='text-gray-500 text-xl'>It will not take a long time till we get the error fixed. We will live again</p>
                <Timer/>
                <div className='flex items-center w-full px-20'>
                    <div className='form-group grow'>
                        <input className='bg-transparent' placeholder='Email'/>
                    </div>
                    <Button>Notify Me</Button>
                </div>

            </div>
        </div>
    )
}