import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const HeroSlider = ({ movies }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Settings for react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Function to get three random movies
    const getRandomMovies = (movies, num) => {
        const shuffled = [...movies].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    const heroMovies = getRandomMovies(movies, 3);

    return (
        <Slider {...settings}>
            {heroMovies.map((movie) => (
                <Box
                    key={movie.id}
                    sx={{
                        position: 'relative',
                        height: isMobile ? '300px' : '500px',
                        backgroundImage: `url(${movie.poster})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        padding: '20px',
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                            color: '#fff',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            padding: '10px',
                        }}
                    >
                        {movie.title}
                    </Typography>
                </Box>
            ))}
        </Slider>
    );
};

export default HeroSlider;
