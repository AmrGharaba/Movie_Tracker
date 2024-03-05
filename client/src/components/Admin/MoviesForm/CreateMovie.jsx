import React from 'react';
import MovieForm from './MovieForm';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateMovie = props => {

    const navigate = useNavigate();

    const createNewMovie = movieData => {
        axios.post('http://localhost:8000/api/admin/movies', movieData)
            .then(response => {
                console.log(response.data);
                navigate("/admin/movies");
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return(
            <MovieForm
            initialTitle=""
            initialDescription=""
            initialPoster=""
            initialTrailer=""
            initialReleaseDate=""
            InitialSelectedCategories={[]}
            onSubmitProp= { createNewMovie } />
    );

}

export default CreateMovie;