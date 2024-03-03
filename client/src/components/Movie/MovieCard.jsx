import React, { useState } from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';

const MovieCard = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            sx={{
                width: 325,
                backgroundColor: '#424242',
                color: '#fff',
                borderRadius: "0",
                boxShadow: "none",
                position: 'relative',
                height: '480px',
                overflow: 'hidden',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardMedia
                component="img"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transition: 'opacity 0.3s',
                    opacity: isHovered ? 0.9 : 1,
                }}
                image={movie.poster}
                alt={movie.title}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    transition: 'background-color 0.3s',
                    backgroundColor: isHovered ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)',
                    padding: '16px',
                    opacity: isHovered ? 1 : 0,
                }}
            >
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {movie.title}
                </Typography>
                <Typography variant="body2" sx={{ overflow: "hidden", textOverflow: 'ellipsis', height: "180px" }}>
                    {movie.description}
                </Typography>
            </Box>
        </Card>
    );
};

export default MovieCard;
