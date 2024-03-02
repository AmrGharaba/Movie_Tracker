import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Footer from '../components/Main/Footer'
import Navbar from '../components/Main/Navbar';
import SearchBar from '../components/Main/SearchBar';
import MovieForm from '../components/MovieForm/MovieForm';
function Main() {
    return (
        <>

            <Navbar></Navbar>
            <Routes>
                <Route element={<MovieForm />} path='/addMovie' />
                <Route element={<SearchBar />} path='/' />

            </Routes>

            <Footer></Footer>
        </>
    )
}

export default Main