import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating';
import "./MovieDetail.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [rating, setRating] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
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
    axios.get(`http://localhost:8000/api/movies/${id}`)
      .then(res => {
        console.log(res.data.Movie)
        setMovie(res.data.Movie);
        setLoaded(true);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  // };

  return (
    <>
      {loaded &&

        <div className="movie-details" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0.6) 75%), url('${movie.poster}')`, paddingLeft: "10%", paddingRight: "10%", backgroundPosition: "center", backgroundSize: "cover", }}>
          <div className="poster" >
            <img style={{
            }} src={`${movie.poster}`} alt={`${movie.title}`} />
          </div>
          <div className="info">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>

            <div className="button-container">
              <button className={`like-button ${liked ? 'active' : ''}`} onClick={handleLike}>
                <FontAwesomeIcon icon={faThumbsUp} size="2x" />
              </button>
              <button className={`dislike-button ${disliked ? 'active' : ''}`} onClick={handleDislike}>
                <FontAwesomeIcon icon={faThumbsDown} size="2x" />
              </button>
            </div>
            {/* <Rating initialRating={rating} onChange={handleRatingChange} /> */}
          </div>
        </div >
      }

    </>
  );
};

export default MovieDetail;
