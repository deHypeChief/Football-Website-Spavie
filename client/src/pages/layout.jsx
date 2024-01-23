import '../styles/global.css'

import Navbar from "../components/navBar/navbard";
import Home from "./home";
import Footer from '../components/footer/footer';
import Enroll from './enroll';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

export default function App(){
    return(
        <>

            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/enroll' element={<Enroll/>}/>
                </Routes>
            <Footer/>
           </BrowserRouter>

        </>
    )
}