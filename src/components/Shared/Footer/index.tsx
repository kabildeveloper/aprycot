export default function Footer() {
    return(
        <div className='bg-white flex items-center justify-between py-2 px-5 text-gray-400'>
            <div className='flex items-center gap-5'>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
            </div>

            <p>© {new Date().getFullYear()} Aprycot, Made with ❤ <span className='text-orange-500'>by Kabil .</span></p>
        </div>
    )
}