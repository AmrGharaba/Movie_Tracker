import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MovieList = props => {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/admin/movies')
            .then(response => {
                setMovies(response.data.Movies);
                setLoaded(true)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [movies]);

    const removeFromDom = movieId => {
        axios.delete("http://localhost:8000/api/admin/movie/" + movieId)
            .then((res) => {
                console.log(res.data.result);
                setMovies(movies.filter(movie => movie._id !== movieId));
            })
            .catch((err) => console.log(err))
    }


    return loaded && (
        <div className="mt-5">
            <h2 className="text-center mb-3">Movies List</h2>
            <table className="table table-dark">
                <thead className="text-center">
                    <tr>
                        <th>Movie</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        movies.map((movie, index) => {
                            return <tr key={index}>
                                <td>{movie.title}</td>
                                <td>
                                    <button className="btn" onClick={() => navigate("/admin/movie/" + movie._id + "/edit")}>Edit</button>
                                    <button className="btn ms-3" onClick={() => removeFromDom(movie._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default MovieList;