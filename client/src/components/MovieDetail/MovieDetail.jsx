import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating';
import Navbar from '../Main/Navbar';
import Footer from '../Main/Footer';

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [rating, setRating] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) {
      setDisliked(false);
    }
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) {
      setLiked(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const fetchItem = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=YOUR_API_KEY`);
    const movieData = await fetchItem.json();
    setMovie(movieData);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
     <Navbar/>
      <div className="movie-details">
        <div className="poster">
          <img src="public\the dark knight rises.jpg" alt="The Dark Knight Rises" />
        </div>

        <div className="info">
          {/* <h1>{movie.title}</h1>
          <p>{movie.overview}</p> */}
          <h1>The Dark knight rises</h1>
          <p>The Dark Knight Rises is a 2012 superhero film directed by Christopher Nolan,<br/>
           who co-wrote the screenplay with his brother Jonathan Nolan, and the story with David S. Goyer.<br/>
           [5] Based on the DC Comics character Batman, it is the final installment in Nolan's The Dark Knight trilogy,<br/>
            and the sequel to The Dark Knight (2008). an Freeman, Marion Cotillard, Joseph Gordon-Levitt, and Michael Caine.</p>

          <div className="button-container">
            <button className={`like-button ${liked ? 'active' : ''}`} onClick={handleLike}>
              <FontAwesomeIcon icon={faThumbsUp} size="2x" />
            </button>
            <button className={`dislike-button ${disliked ? 'active' : ''}`} onClick={handleDislike}>
              <FontAwesomeIcon icon={faThumbsDown} size="2x" />
            </button>
          </div>
          <Rating initialRating={rating} onChange={handleRatingChange} />
        </div>
      </div>
      <Footer/>
    </>
  );
};
  
export default MovieDetail;
