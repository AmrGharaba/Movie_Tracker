import React, { useEffect, useState } from 'react';
import { Card, CardMedia, Box, Typography, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
    const userId = localStorage.getItem("userid");
    const [isHovered, setIsHovered] = useState(false);
    const movieId = movie._id;
    const [isWatchlisted, setIsWachlisted] = useState(movie.usersWatchListed.includes(userId))
    const [mouseMoved, setMouseMoved] = useState(true);

    useEffect(() => {
        setIsWachlisted(movie.usersWatchListed.includes(userId));
    }, [])
    const handleAddToWatchlist = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (isWatchlisted) {
            axios.patch(`http://localhost:8000/api/movies/${movie._id}/removeFromWatchList`, { userId })
                .then(response => {
                    console.log("Removed from watchlist:", response.data);
                    setIsWachlisted(false);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } else {
            axios.patch(`http://localhost:8000/api/movies/${movieId}/watchList`, { userId })
                .then(response => {
                    console.log(response)
                    setIsWachlisted(true)
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
    };


    return (

        <Link
            onMouseMove={() => setMouseMoved(true)}
            onMouseDown={() => setMouseMoved(false)}
            to={!mouseMoved && `/home/${movie._id}`}>
            <Card
                sx={{
                    width: 305,
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
                        padding: '16',
                        opacity: isHovered ? 1 : 0,
                        overflow: "hidden"
                    }}
                >
                    {userId && isHovered && (
                        <IconButton
                            onClick={(event) => handleAddToWatchlist(event)}
                            sx={{
                                zIndex: 3,
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                color: isWatchlisted ? 'red' : '#fff',
                            }}
                        >
                            <AddCircleOutlineIcon />
                        </IconButton>
                    )}
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', padding: "10px" }}>
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" sx={{ overflow: "hidden", textOverflow: 'ellipsis', height: "180px", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "10px" }}>
                        {movie.description}
                    </Typography>
                </Box>
            </Card>
        </Link >
    );
};

export default MovieCard;
