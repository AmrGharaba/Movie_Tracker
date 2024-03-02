import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#343a40' }} className="navbar">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >

                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Movie Tracker
                </Typography>
                <Button color="inherit" component={Link} to="/home">Home</Button>
                <Button color="inherit" component={Link} to="/discover">Discover</Button>
                <Button color="inherit" component={Link} to="/watchlist">Watchlist</Button>
                <Button color="inherit" component={Link} to="/home/addMovie">Add Movie</Button>
                <Button color="inherit" component={Link} to="/">Sign Out</Button>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
