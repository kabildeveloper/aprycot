import Button from "../components/Shared/Button";

export default function SignIn() {
    return (
        <div className='flex min-h-dvh max-w-dvw items-center px-24'>
            <div className='w-1/3'>
                <div className='w-full mb-3'>
                    <img alt='Aprycot' src='/assets/main-logo.png'/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='mb-3 font-bold text-2xl playfair-font'>Sign In</h1>
                    <p>Sign in to stay connected.</p>
                    <div className='w-full px-2 mt-5'>
                        <div className='form-group'>
                            <label className='block'> Email </label>
                            <input/>
                        </div>

                        <div className='form-group mt-3'>
                            <label className='block'> Password </label>
                            <input/>
                        </div>
                        <div className='flex w-full px-3 my-3 justify-between'>
                            <div className='text-gray-500 flex gap-2 items-center'>
                                <input type="checkbox"/> <p className='text-sm'>Remember me?</p>
                            </div>
                            <p className='text-sm text-orange-500'>Forgot Password</p>
                        </div>
                        <div className='flex justify-center mt-6'>
                            <Button className='w-1/3' size="sm">Sign in</Button>
                        </div>
                        <p className='text-center my-2'>
                            or sign in with other accounts?
                        </p>
                        <div className='flex gap-4 items-center justify-center'>
                            <img alt='gmail' src='/assets/gmail.png'/>
                            <img alt='facebook' src='/assets/facebook.png'/>
                            <img alt='instagram' src='/assets/instagram.png'/>
                            <img alt='linkedlin' src='/assets/linkedin.png'/>
                        </div>
                        <p className='text-center my-2'>
                            Don’t have an account? Click here to sign up.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-2/3 h-full'>
                <div className='flex items-center justify-center w-full h-[100%]'>
                    <img alt='bg' className='px-20 w-[90%]' src='/assets/sing-in-bg.png'/>
                </div>
            </div>
        </div>
    )
}