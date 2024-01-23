import '../styles/global.css'

import Home from "./home";
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar'
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