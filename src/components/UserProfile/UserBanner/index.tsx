import "./UserBanner.css";

export default function UserBanner() {
    return (
        <div className='user-profile-banner h-[606px] flex flex-col justify-end'>
            <div className='backdrop-blur-xl bg-white bg-opacity-60 top-0 h-[140px] px-6 flex justify-between'>
                <div className='flex'>
                    <img className='rounded-full relative top-[-50px] bg-[#FFF3EB]' src='/assets/avatar.png'
                         alt='avatar'
                         width={140}
                         height={140}/>
                    <div className='ms-4 flex gap-10 items-center'>
                        <div>
                            <p className='text-2xl font-bold playfair-font text-amber-600 pb-2'>Devon Lane</p>
                            <p>Lisbon, Portugal</p>
                        </div>
                        <div className='h-fit mt-2'>
                            <p className='pb-1'>UI/UX Designer</p>
                            <p>Hello@email.com</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='banner-metrics'>
                        <p>142</p>
                        <p>Reviews</p>
                    </div>
                    <div className='banner-metrics'>
                        <p>201</p>
                        <p>Photos</p>
                    </div>
                    <div className='banner-metrics'>
                        <p>142</p>
                        <p>Followers</p>
                    </div>
                </div>
            </div>


        </div>
    )
}