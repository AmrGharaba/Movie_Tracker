import React from 'react'
import { useState, useEffect } from 'react';
import AllMovies from '../components/Movie/AllMovies';
import axios from 'axios';

function MainWatchList() {
    const userId = localStorage.getItem("userid");
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [watchlistMovies, setWatchlistMovies] = useState([]);






    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
            .then(res => {
                console.log("watchlist", res.data.Movies)
                setWatchlistMovies(res.data.Movies.filter(movie => movie.usersWatchListed.includes(userId)));
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            });
    }, [userId, watchlistMovies]);




    return (

        <AllMovies movies={watchlistMovies} loaded={loaded} />

    )
}

export default MainWatchList