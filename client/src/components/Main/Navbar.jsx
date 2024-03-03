import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, Button, IconButton } from '@mui/material';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Set state based on scroll position
            setIsScrolled(window.scrollY > 0);
        };

        // Add scroll listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove scroll listener when component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar position={isScrolled ? 'fixed' : 'static'} sx={{ width: '100%', margin: 0, padding: 0, backgroundColor: '#131313', transition: 'top 0.3s' }}>
            <Toolbar sx={{ justifyContent: 'space-between', display: 'flex' }}>
                {/* Left Section for Title and Menu Icon */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        {/* MenuIcon here */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ color: "red", fontSize: "30px" }}>
                        Movie Tracker
                    </Typography>
                    <Button color="inherit" sx={{ marginLeft: "50px" }} component={Link} to="/home">Home</Button>
                    <Button color="inherit" component={Link} to="/discover">Discover</Button>
                    <Button color="inherit" component={Link} to="/watchlist">Watchlist</Button>
                    <Button color="inherit" component={Link} to="/home/addMovie">Add Movie</Button>
                </Box>

                {/* Right Section for Sign Out Button */}
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'red', // Change color to red on hover
                        },
                    }} color="inherit" component={Link} to="/">Sign Out</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
