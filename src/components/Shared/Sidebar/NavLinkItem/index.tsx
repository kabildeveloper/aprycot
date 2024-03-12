import {NavLinkItemProps} from "../../../../types/NavLinkItem.ts";
import {NavLink} from "react-router-dom";

export default function NavLinkItem(props: NavLinkItemProps) {
    return (
        <NavLink className='w-full flex justify-center' to={props.path || '/'}>
            <div
                className={`${props.open ? 'w-[80%] mx-auto ps-5' : 'w-[52px] justify-center'} ${props.active ? 'bg-orange-500 text-white [&>*]:text-white' : ''} h-[52px] hover:bg-orange-500 rounded-full flex items-center gap-2 hover:text-white transition-width duration-200`}>
                <props.icon className='text-orange-500 icon' style={{fontSize: '22px'}}/>
                {props.open && <p>{props.title}</p>}
            </div>
        </NavLink>
    )
}