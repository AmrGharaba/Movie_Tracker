import React, { useState, useEffect } from 'react';
import "./MovieDetail.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, Button, Stack, Chip, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const MovieDetail = () => {
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const userId = localStorage.getItem("userid");
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [watchlistCount, setWatchlistCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [categories, setCategories] = useState([]);



  useEffect(() => {
    axios.get(`http://localhost:8000/api/movies/${id}`)
      .then(res => {
        const fetchedMovie = res.data.Movie;
        setMovie(fetchedMovie);
        setIsWatchlisted(fetchedMovie.usersWatchListed.includes(userId));
        setWatchlistCount(movie.usersWatchListed.length);
        setIsLiked(fetchedMovie.usersLiked.includes(userId));
        setLikeCount(movie.usersLiked.length);
        setLoaded(true);

      })
      .catch(err => console.log(err));
  }, [id, userId, movie]);


  useEffect(() => {
    if (movie) {
      axios.get('http://localhost:8000/api/categories')
        .then(res => {
          const allCategories = res.data.Categories;
          const filteredCategories = allCategories.filter(category => movie.categories.includes(category._id));
          setCategories(filteredCategories);
        })
        .catch(err => console.log(err));
    }
  }, [movie]);

  const handleAddToWatchlist = () => {
    if (userId) {
      const action = isWatchlisted ? 'removeFromWatchList' : 'watchList';
      axios.patch(`http://localhost:8000/api/movies/${movie._id}/${action}`, { userId })
        .then(() => {
          setIsWatchlisted(!isWatchlisted);
          setLikeCount(movie.usersLiked.length)
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
    else {
      alert("Register or login to continue")
    }
  };

  const handleLike = () => {
    if (userId) {
      const action = isLiked ? 'removeLike' : 'addLike';
      axios.patch(`http://localhost:8000/api/movies/${movie._id}/${action}`, { userId })
        .then((res) => {
          console.log(res)
          setIsLiked(!isLiked);
        })
        .catch(error => console.error('There was an error!', error));
    }
    else {
      alert("Register or login to continue")

    }
  };
  if (!loaded) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <div className="movie-details" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0.6) 75%), url('${movie.poster}')`, paddingLeft: "10%", paddingRight: "10%", backgroundPosition: "center", backgroundSize: "cover", }}>
        <div className="poster">
          <img src={movie.poster} alt={movie.title} />
        </div>
        <Box className="info">
          <Typography variant="h3">{movie.title}</Typography>
          <Typography variant="body1">{movie.description}</Typography>

          <Box sx={{ my: 2 }}>
            {categories.map((category, index) => (
              <Chip key={index} label={category.name} sx={{ mr: 1, mb: 1, color: "white", backgroundColor: "rgba(255, 0, 0, .5)", borderRadius: "4px" }} />
            ))}

          </Box>
          <Stack sx={{ mt: 4 }} direction="row" spacing={2} alignItems="center">
            <Button
              startIcon={isWatchlisted ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
              onClick={handleAddToWatchlist}
              variant="contained"
              sx={{
                color: "white",
                width: "300px",
                backgroundColor: "rgba(255, 0, 0, .5)",
                '&:hover': {
                  backgroundColor: "rgba(255, 0, 0, 0.7)",
                },
              }}
            >
              {isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </Button>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>
              {watchlistCount} {watchlistCount === 1 ? 'user has' : 'users have'} this on their watchlist
            </Typography>
          </Stack>

          <Stack sx={{ mt: 4 }} direction="row" spacing={2} alignItems="center">
            <IconButton
              sx={{
                color: `${isLiked ? "white" : ""}`,
                backgroundColor: "rgba(255, 0, 0, .5)",
                '&:hover': {
                  backgroundColor: "rgba(255, 0, 0, 0.7)",
                },
              }}
              onClick={handleLike}

              aria-label={isLiked ? "Unlike" : "Like"}

            >
              <ThumbUpAltIcon />
            </IconButton>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>
              {likeCount} {likeCount === 1 ? 'user has' : 'users have'} liked this movie
            </Typography>
          </Stack>

        </Box>
      </div>
    </>
  );
};

export default MovieDetail;
