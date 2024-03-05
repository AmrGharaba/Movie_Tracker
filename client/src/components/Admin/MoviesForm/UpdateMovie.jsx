import React, { useState, useEffect } from 'react' ;
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import MovieForm from './MovieForm';

const UpdateMovie = props => {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/admin/movie/' + id)
            .then(response => {
                setMovie(response.data.Movie);
                setLoaded(true);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [movie]);

    const UpdateTheMovie = movieData => {
        axios.put('http://localhost:8000/api/admin/movie/' + id, movieData)
            .then(response => {
                console.log(response.data);
                navigate("/admin/movies");
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return(
        <>
            {
                loaded && (
                    <MovieForm
                    initialTitle={ movie.title }
                    initialDescription={ movie.description }
                    initialPoster={ movie.poster }
                    initialTrailer={ movie.trailer }
                    initialReleaseDate={ movie.releaseDate }
                    InitialSelectedCategories={ movie.categories }
                    onSubmitProp= { UpdateTheMovie } />
                )
            }
        </> 
    );
    
}

export default UpdateMovie;
