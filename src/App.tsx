// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Route, Routes} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import EmailVerify from "./pages/EmailVerify.tsx";
import Confirm from "./pages/Confirm.tsx";
import Error404 from "./pages/Error404.tsx";
import Error500 from "./pages/Error500.tsx";
import Maintenance from "./pages/Maintenance.tsx";
import Layout from "./components/Shared/Layout";

function App() {


    return (

        <div className=''>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/user-profile' element={<UserProfile/>}/>
                    <Route path='/sign-in' element={<SignIn/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/email' element={<EmailVerify/>}/>
                    <Route path='/confirm' element={<Confirm/>}/>
                    <Route path='/error-404' element={<Error404/>}/>
                    <Route path='/error-500' element={<Error500/>}/>
                    <Route path='/maintenance' element={<Maintenance/>}/>
                    <Route path='*' element={<Error404/>}/>
                </Routes>
            </Layout>
        </div>
    )
}

export default App


