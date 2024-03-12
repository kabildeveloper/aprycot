import {RiSearchLine} from "react-icons/ri";
import {IoCart, IoMailOpen, IoNotifications} from "react-icons/io5";

export default function Header() {
    return (
        <div className='bg-white p-4 mb-10 flex justify-between items-center'>
            <div className='bg-transparent border rounded-full py-2 px-3 flex items-center h-fit focus-within:border-orange-500 transition-all duration-200'>
                <RiSearchLine className='me-2'/>
                <input placeholder='Search' className='flex-grow bg-transparent me-4 text-gray-600 font-extralight text-sm' />
            </div>
            <div className='flex items-center gap-5'>
                <div className='flex gap-5 text-2xl text-gray-500'>
                    <IoNotifications className='hover:text-orange-500 transition-all duration-500 cursor-pointer'/>
                    <IoMailOpen className='hover:text-orange-500 transition-all duration-500 cursor-pointer'/>
                    <IoCart className='hover:text-orange-500 transition-all duration-500 cursor-pointer'/>
                </div>

                <img alt='avatar' src='/assets/avatar.png' width={45} height={45} className='rounded-full bg-[#FFF3EB]' />
                <div>
                    <p>Kabil Rajendhiran</p>
                    <p className='text-sm text-orange-500'>Software Engineer</p>
                </div>
            </div>

        </div>
    )
}