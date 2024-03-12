import {RiArrowRightSLine} from "react-icons/ri";
import "./Menu.css";

export interface MenuProps {
    imgPath: string,
    menuItemName: string
}

export default function Menu(props: MenuProps) {
    return(
        <div className='menu select-none'>
            <img className='mb-6 w-[64px] h-[64px]' width={64} height={64}  src={`/assets/${props.imgPath}`} alt='pizza'/>
            <p className='font-semibold leading-7'>{props.menuItemName}</p>
            <div className='w-full h-[1px] border-[var(--primary-color)] border-b my-5 line'></div>
            <RiArrowRightSLine className='bg-[var(--primary-color)] rounded-full p-0.5 w-[24px] h-[24px] text-white arrow-icon'/>
        </div>
    )
}