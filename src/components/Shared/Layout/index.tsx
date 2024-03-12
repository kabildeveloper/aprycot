import Sidebar from "../Sidebar";
import Header from "../Header";
import {PropsWithChildren} from "react";
import Footer from "../Footer";
import {matchPath, useLocation} from "react-router-dom";


export default function Layout(props: PropsWithChildren) {
    const navEnabledRoutes = ['/', '/user-profile'];

    const location = useLocation();

    const showNav = () => {
        return navEnabledRoutes.some((path)=>{
            return !!matchPath(location.pathname, path);
        })
    }

    const show = showNav();

    return (
        <div className='flex w-full'>
            {show && <Sidebar/>}
            <div className={`${show ? 'ms-[120px]': ''} block w-full`}>
                {show && <Header/>}
                <div className='2xl:mx-auto px-10 w-full mb-10'>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}