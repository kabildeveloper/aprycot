import {useState} from "react";
import {RiAppsFill, RiBardFill, RiShieldFill, RiUserFill} from "react-icons/ri";
import Accordion from "../Accordion";
import {AccordionOption} from "../../../types/AccordionProps.ts";
import NavLinkItem from "./NavLinkItem";
import usePathMatch from "../../../app/hooks/usePathMatch.ts";

export default function Sidebar() {

    const [open, setOpen] = useState<boolean>(false);
    const isPathMatch = usePathMatch();

    const authenticationLinks: AccordionOption[] = [{
        title: 'Sign in',
        link: '/sign-in'
    },{
        title: 'Sign up',
        link: '/sign-up'
    },{
        title: 'Email',
        link: '/email'
    },{
        title: 'Confirm',
        link: '/confirm'
    }]

    const usersLinks: AccordionOption[] = [{
        title: 'User Profile',
        link: '/user-profile'
    }]

    const specialLinks: AccordionOption[] = [{
        title: 'Error 404',
        link: '/error-404'
    },{
        title: 'Error 500',
        link: '/error-500'
    },{
        title: 'Maintenance',
        link: '/maintenance'
    }]

    const onMouseEnter = () => {
        if(!open) {
            setOpen(true);
        }
    }

    const onMouseLeave = () => {
        if(open) {
            setOpen(false);
        }
    }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
             className={`${open ? 'w-[258px]' : 'w-[120px]'} fixed z-20 shadow-xl bg-white h-full duration-500 overflow-clip text-gray-500`}>
            <div className={`${open ? 'w-[258px]' : 'w-[120px]'}`}>
                <div className='w-full border-b mb-2'>
                    {
                        open ? (<img alt='Aprycot' src='/assets/main-logo.png' height={76}/>) : (
                            <img alt='Aprycot' className='h-[76px] w-[120px]' src='/assets/logo-sm.png'/>)
                    }
                </div>
                <div className={`w-full flex flex-col ${open ? 'items-start' : 'items-center'}`}>
                    <p className={`${open ? 'ms-10 pt-4 pb-4' : ''}`}>{open ? 'Home' : ''}</p>
                    <NavLinkItem active={isPathMatch('/')} icon={RiAppsFill} title='Dashboard' open={open}/>
                </div>

                <div className={`mt-2 w-full flex flex-col ${open ? 'items-start' : 'items-center'}`}>
                    <p className={`${open ? 'ms-10 pt-4 pb-4' : ''}`}>{open ? 'Pages' : ''}</p>
                    <Accordion title='Authentication' icon={RiShieldFill} subMenu={authenticationLinks} open={open}/>
                    <Accordion title='Users' icon={RiUserFill} subMenu={usersLinks} open={open}/>
                    <Accordion title='Special Pages' icon={RiBardFill} subMenu={specialLinks} open={open}/>
                </div>

            </div>
        </div>
    )
}