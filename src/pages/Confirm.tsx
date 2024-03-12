import Button from "../components/Shared/Button";

export default function Confirm() {
    return (
        <div className='max-w-dvw h-dvh relative'>
            <div className='flex h-full items-center px-24'>
                <div className='w-1/3'>
                    <div className='w-full mb-3'>
                        <img alt='logo' src='/assets/main-logo.png'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-7 p-6'>
                        <h1 className='playfair-font font-bold text-4xl'>Reset Password</h1>
                        <p className='px-10 text-center text-gray-500'>Enter your email address and we’ll send you an
                            email with instructions to reset your password</p>
                        <div className='form-group w-full'>
                            <label className='block'> Email </label>
                            <input/>
                        </div>
                        <div className='w-1/3'>
                            <Button className='w-full'>Reset</Button>
                        </div>

                    </div>
                </div>
            </div>
            <img alt='email-bg' className='absolute top-0 right-0' src='/assets/email-bg.png'/>
        </div>
    )
}