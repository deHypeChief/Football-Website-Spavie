import '../styles/global.css'

import Home from "./home";
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar'
import Enroll from './enroll';
import About from "./about"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import Loading from '../components/loading/loading';
import { useEffect, useState } from 'react';
import { LoadTimer } from '../utils/loadTimer';
// import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();
export default function App() {
    const [loading, isLoading ] = useState(true)

    useEffect(()=>{ 
        LoadTimer(isLoading ,5000)
    }, [])

    return (
        <>
            {loading ? <Loading /> : <Layout/>}
        </>
    )
}

function Layout() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/enroll' element={<Enroll />} />
                    <Route path='/about' element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </QueryClientProvider>
    )
}