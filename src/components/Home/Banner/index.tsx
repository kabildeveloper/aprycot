import Button from "../../Shared/Button";

export default function Banner() {
    return (
        <div className='banner mb-10'>
            <div className='deal'>
                <p>👑 Deal of the weekend</p>
                <h1 style={{fontSize: "40px"}} className='playfair-font font-bold'> Hello, Austine Robertson </h1>
                <p>Get FREE delivery on every weekend.</p>
                <Button className='w-fit'>Check Menu</Button>
            </div>
            <div className='w-full md:w-1/3'>
                <div className='h-[325px] md:h-full relative'>
                    <div className='absolute bottom-[100px] z-10 flex items-center justify-center w-full'>
                        <img width={399} height={295} alt='burger' src='/assets/burger.png'/>
                    </div>
                    <div className='relative rounded-3xl h-full pt-[50px]'>
                        <div className='relative rounded-3xl bg-white bg-opacity-60 flex flex-col items-center justify-end pb-5 h-full'>
                            <div className='text-center mb-10'>
                                <h1 style={{fontSize: "40px"}} className='playfair-font font-bold mb-3'> 50 % Off </h1>
                                <p className='text-gray-500'>The full price of burgers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}