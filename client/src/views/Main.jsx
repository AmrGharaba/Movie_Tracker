import React from 'react'
import { Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Main/Footer'
import Navbar from '../components/Main/Navbar';
import SearchBar from '../components/Main/SearchBar';
import MovieForm from '../components/MovieForm/MovieForm';
import ContactUs from '../components/AboutusPages/ContactUs';
import MoviesCarousel from '../components/Movie/MoviesCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import AllMovies from '../components/Movie/AllMovies';
import MainWatchList from './MainWatchList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieDetail from '../components/MovieDetail/MovieDetail';


function Main() {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setSearchTerm("");
        axios.get('http://localhost:8000/api/movies')
            .then(res => {
                setMovies(res.data.Movies);
                setFilteredMovies(res.data.Movies);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, [!location.pathname.includes("allMovies")]);

    useEffect(() => {

        const lowercasedFilter = searchTerm.toLowerCase();
        const filteredData = movies.filter(item => {
            return item.title.toLowerCase().includes(lowercasedFilter);
        });
        setFilteredMovies(filteredData);
    }, [searchTerm, movies]);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };






    return (
        <>

            <Navbar></Navbar>
            {/* <HeroSlider movies={movies} /> */}
            <Routes>
                <Route element={<MovieForm />} path='/addMovie' />
                <Route element={<>

                    <MoviesCarousel />
                </>} path='/' />
                <Route path='/allMovies' element={
                    <>
                        <SearchBar onSearch={handleSearch} />
                        <AllMovies movies={filteredMovies} loaded={loaded} />
                    </>
                } />
                <Route path="/watchlist" element={<MainWatchList />} />
                <Route element={<ContactUs />} path='/contactus' />
                <Route element={<MovieDetail />} path='/:id' />


            </Routes>



            <Footer></Footer>
        </>
    )
}

export default Main