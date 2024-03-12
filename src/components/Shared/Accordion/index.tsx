import "./Accordion.css";
import {RiArrowRightSLine, RiCircleFill} from "react-icons/ri";
import {useState} from "react";
import {AccordionProps} from "../../../types/AccordionProps.ts";
import {useNavigate} from "react-router-dom";
import usePathMatch from "../../../app/hooks/usePathMatch.ts";

export default function Accordion(props: AccordionProps) {

    const [expand, setExpand] = useState<boolean>(false);
    const isPathMatch = usePathMatch();
    const navigate = useNavigate();

    const onClickToggle = () => {
        setExpand(!expand);
    }

    const highlightHeader = () => {
        if(props.subMenu.some((menu)=>isPathMatch(menu.link))) {
            return '!bg-orange-500 [&>*]:!text-white [&>div>.icon]:!text-white';
        }
        return ''
    }

    const onCLickNavLink = (path: string) => {
        navigate(path);
    }

    return (
        <>
            <div
                onClick={onClickToggle}
                className={`accordion-header mb-2 ${highlightHeader()} ${props.open ? 'w-[80%] mx-auto ps-5' : 'w-[54px] bg-orange-100'}`}>
                <div className={`flex items-center ${props.open ? '': 'justify-center'} gap-2 w-full`}>
                    <props.icon className='icon text-orange-500' style={{fontSize: '22px'}}/>
                    {props.open && <p>{props.title}</p>}
                </div>
                {props.open && <RiArrowRightSLine className='text-gray-900 me-1' style={{fontSize: '22px'}}/>}
            </div>
            {props.open && <div className={`w-full transition-all duration-500 ps-[70px] mt-1 mb-2 overflow-hidden ${expand ? 'max-h-[200px]' : 'max-h-0'}`}>
                <ul>
                    {
                        props.subMenu.map((menu)=>{
                            return (
                                <li
                                    onClick={()=>onCLickNavLink(menu.link)}
                                    key={menu.title}
                                    className={`${isPathMatch(menu.link) ? '!bg-orange-500 !text-white [&>*]:!text-white' : ''} 
                                                py-2 flex gap-4 items-center rounded-full hover:bg-orange-100 
                                                [&>*]:hover:text-orange-500 ps-4 me-4 transition-all duration-200 cursor-pointer`}>

                                    <RiCircleFill className='text-orange-500 text-xs'/> <p
                                    className='text-[16px]'>{menu.title}</p></li>
                            )
                        })
                    }
                </ul>
            </div>}
        </>
    )
}