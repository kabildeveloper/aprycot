import Button from "../components/Shared/Button";

export default function SignUp() {
    return (
        <div className='flex h-dvh items-center px-24'>
            <div className='w-2/5'>
                <div className='w-full mb-3'>
                    <img alt='Aprycot' src='/assets/main-logo.png'/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='mb-3 font-bold text-2xl playfair-font'>Sign Up</h1>
                    <p>Create your Hope UI account</p>
                    <div className='w-full px-5 mt-4'>
                        <div className='flex'>
                            <div className='w-1/2'>
                                <div className='form-group'>
                                    <label className='block'> First Name </label>
                                    <input/>
                                </div>

                                <div className='form-group mt-3'>
                                    <label className='block'> Email </label>
                                    <input/>
                                </div>

                                <div className='form-group mt-3'>
                                    <label className='block'> Password </label>
                                    <input type='password'/>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div className='form-group'>
                                    <label className='block'> Last Name </label>
                                    <input/>
                                </div>

                                <div className='form-group mt-3'>
                                    <label className='block'> Phone No </label>
                                    <input type='number'/>
                                </div>

                                <div className='form-group mt-3'>
                                    <label className='block'> Confirm Password </label>
                                    <input type='password'/>
                                </div>
                            </div>
                        </div>

                        <div className='text-gray-500 flex gap-2 items-center justify-center mt-6'>
                            <input type="checkbox"/> <p>I agree with the terms of use</p>
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
            <div className='w-3/5 h-full'>
                <div className='flex items-center justify-center w-full h-[100%]'>
                <img alt='bg' className='px-20' src='/assets/sing-in-bg.png'/>
                </div>
            </div>
        </div>
    )
}