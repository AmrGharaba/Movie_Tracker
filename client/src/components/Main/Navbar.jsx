import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, Button, IconButton } from '@mui/material';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <AppBar position={isScrolled ? 'fixed' : 'static'} sx={{ width: '100%', margin: 0, padding: 0, backgroundColor: `${isScrolled ? 'rgba(19, 19, 19, 0.7)' : '#131313'}`, backdropFilter: 'blur(10px)', transition: 'top 0.3s' }}>
            <Toolbar sx={{ justifyContent: 'space-between', display: 'flex' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ color: "red", fontSize: "30px" }}>
                        Movie Tracker
                    </Typography>
                    <Button color="inherit" sx={{ marginLeft: "50px" }} component={Link} to="/home">Home</Button>
                    <Button color="inherit" component={Link} to="/home/allMovies">Discover</Button>
                    <Button color="inherit" component={Link} to="/watchlist">Watchlist</Button>
                    <Button color="inherit" component={Link} to="/home/addMovie">Add Movie</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }} color="inherit" component={Link} to="/">Sign Out</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
