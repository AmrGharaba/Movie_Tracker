import React, { useState } from 'react';
import { Box, TextField, IconButton, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <Container maxWidth="false" // Disables maxWidth to allow the container to stretch
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%", // Ensures the Container takes the full width
                padding: 0, // Removes padding to ensure full width utilization
                margin: 0, // Removes margin to ensure full width utilization
                backgroundColor: 'black'


            }}
        >
            <Box
                sx={{
                    width: '80%', // Ensures the Box takes the full width of its Container
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 5, // Maintains padding within the Box for aesthetics
                    boxSizing: 'border-box', // Ensures padding does not affect the overall width

                }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    fullWidth // TextField takes full width of its parent Box
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={handleSearch} aria-label="search"
                                sx={{
                                    color: 'darkgrey',
                                    '&:hover': {
                                        color: 'black',
                                    },
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#757575',
                                borderRadius: '10px',
                            },
                            '&:hover fieldset': {
                                borderColor: '#9e9e9e',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#9e9e9e',
                            },
                        },
                    }}
                />
            </Box>
        </Container>
    );
};

export default SearchBar;
