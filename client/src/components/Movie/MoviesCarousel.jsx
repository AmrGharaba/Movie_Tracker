import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import MovieCard from './MovieCard';
import './CustomCarousel.css';
import Box from '@mui/material/Box';
import axios from 'axios';

const MoviesCarousel = ({ }) => {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/movies')
      .then(res => {
        console.log(res.data.Movies);
        setMovies(res.data.Movies);
        setLoaded(true);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
        }
      }
    ]
  };
  return (
    <Box style={{ paddingRight: "10%", paddingLeft: "10%", backgroundColor: 'black', paddingTop: "50px", paddingBottom: "50px" }}
    >
      <Slider {...settings}>
        {loaded && movies.map((movie) => (
          <div key={movie._id}><MovieCard movie={movie} /></div>
        ))}
      </Slider>



    </Box >
  );
};

export default MoviesCarousel;
