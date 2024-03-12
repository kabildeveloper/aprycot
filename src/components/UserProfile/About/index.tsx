export default function About() {
    return(
        <div className='bg-white p-6 bg-opacity-60 rounded-3xl mb-10'>
            <div className='border-b  mb-6'>
                <h1 className='pb-6 font-bold text-2xl playfair-font'>About</h1>
            </div>
            <div className='text-gray-500 font-light [&>p]:mb-2'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className='font-semibold'>Lorem ipsum dolor sit amet</span>
                </p>
                <p>
                    Email: <span className='text-orange-500'>someemail@example.com</span>
                </p>
                <p>
                    Phone: <span className='text-orange-500'>+0123456789</span>
                </p>
                <p>
                    Location: <span className='text-orange-500'>USA</span>
                </p>

            </div>
        </div>
    )
}