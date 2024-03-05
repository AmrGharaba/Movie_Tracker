import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Main/Footer'
import Navbar from '../components/Main/Navbar';
import MovieForm from '../components/MovieForm/MovieForm';
import ContactUs from '../components/AboutusPages/ContactUs';
import MoviesCarousel from '../components/Movie/MoviesCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import MainWatchList from './MainWatchList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MainDiscover from './MainDiscover';


function Main() {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
            .then(res => {
                setMovies(res.data.Movies);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, movies);

    return (
        <>
            <Navbar/>
            <Routes>
                <Route element={<MovieForm />} path='/addMovie' />
                <Route element={<>
                    <MoviesCarousel />
                </>} path='/' />
                <Route path='/allMovies' element={<MainDiscover />} />
                <Route path="/watchlist" element={<MainWatchList />} />
                <Route element={<ContactUs />} path='/contactus' />
                <Route element={<MovieDetail />} path='/:id' />
            </Routes>
            <Footer/>
        </>
    )
}

export default Main