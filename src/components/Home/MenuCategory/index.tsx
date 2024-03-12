import Menu from "../Menu";
import {RiArrowRightLine, RiArrowRightSLine} from "react-icons/ri";
import SubMenu from "../SubMenu";
import {Swiper, SwiperSlide} from "swiper/react";
import {useAppSelector} from "../../../app/hooks/useAppSelector.ts";

export default function MenuCategory() {

    const menu = useAppSelector(state => state.menu.menu);
    const dishes = useAppSelector(state => state.dish.dishes);

    return(
        <section className='ps-10  w-2/3'>
            <div className='flex items-center justify-between pe-4'>
                <h1 style={{fontSize: "40px"}} className='playfair-font font-bold my-6'> Menu Category</h1>
                <div className='flex gap-2'>
                    <p>View All</p>
                    <RiArrowRightSLine
                        className='bg-[var(--primary-color)] rounded-full p-0.5 w-[24px] h-[24px] text-white arrow-icon'/>
                </div>
            </div>
            <div className='mt-12'>
                <div className='w-full flex flex-col items-center'>
                    <Swiper spaceBetween={32} slidesPerView={"auto"} centeredSlides centeredSlidesBounds>
                        <div>
                            {
                                menu.map((menuItem) => {
                                    return (
                                        <SwiperSlide key={menuItem.menuItemName}> <Menu {...menuItem}/> </SwiperSlide>
                                    )
                                })
                            }
                        </div>
                    </Swiper>
                    <div className='m-4 text-red-500 font-semibold flex items-center gap-1'>
                        <p>Swipe to see more</p>
                        <RiArrowRightLine className='text-2xl'/>
                    </div>

                </div>
                <div className='mt-0'>
                    <div className='w-full flex flex-col items-center'>
                        <Swiper spaceBetween={32} slidesPerView={4} centeredSlidesBounds>
                            {
                                dishes.map((dish) => {
                                    return (
                                        <SwiperSlide key={dish.name}>
                                            <SubMenu {...dish}/>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <div className='m-4 mb-0 text-red-500 font-semibold flex items-center gap-1'>
                            <p>Swipe to see more</p>
                            <RiArrowRightLine className='text-2xl'/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}