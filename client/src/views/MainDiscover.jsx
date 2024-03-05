import React from 'react'
import SearchBar from '../components/Main/SearchBar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import AllMovies from '../components/Movie/AllMovies';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MainDiscover() {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);


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
    }, []);

    useEffect(() => {
        const lowercasedFilter = searchTerm.toLowerCase();
        const filteredData = movies.filter(item => {
            return item.title.toLowerCase().includes(lowercasedFilter);
        });
        setFilteredMovies(filteredData);
    }, [searchTerm]);
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };
    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <AllMovies movies={filteredMovies} loaded={loaded} />

        </>
    )
}

export default MainDiscover