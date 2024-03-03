import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Footer from '../components/Main/Footer'
import Navbar from '../components/Main/Navbar';
import SearchBar from '../components/Main/SearchBar';
import MovieForm from '../components/MovieForm/MovieForm';
import ContactUs from '../components/AboutusPages/ContactUs';
import MoviesCarousel from '../components/Movie/MoviesCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from '../components/Main/HeroSlider';
import { useState, useEffect } from 'react';
import axios from 'axios';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
            .then(res => {
                console.log(res.data.Movies);
                setMovies(res.data.Movies);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <>

            <Navbar></Navbar>
            {/* <HeroSlider movies={movies} /> */}
            <Routes>
                <Route element={<MovieForm />} path='/addMovie' />
                <Route element={<>
                    <SearchBar />
                    <MoviesCarousel />
                </>} path='/' />
                <Route element={<ContactUs />} path='/contactus' />


            </Routes>



            <Footer></Footer>
        </>
    )
}

export default Main