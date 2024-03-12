import {NavLinkItemProps} from "../../../../types/NavLinkItem.ts";
import {NavLink} from "react-router-dom";
import "./NavLinkItem.css";
export default function NavLinkItem(props: NavLinkItemProps) {
    return (
        <NavLink className='w-full flex justify-center' to={props.path || '/'}>
            <div
                className={
                    `${props.open ? 'w-[80%] mx-auto ps-5' : 'w-[52px] justify-center'} 
                    ${props.active ? 'bg-orange-500 text-white [&>*]:text-white' : ''} 
                nav-link-item`}>

                <props.icon className='text-orange-500 icon' style={{fontSize: '22px'}}/>
                {props.open && <p>{props.title}</p>}
            </div>
        </NavLink>
    )
}