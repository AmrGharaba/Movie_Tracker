import React, { useState } from 'react';
import { Box, TextField, IconButton, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSearchChange = (e) => {
        const { value } = e.target;
        setTerm(value);
        onSearch(value);
    };

    return (
        <Container maxWidth="false"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%",
                padding: 0,
                margin: 0,
                backgroundColor: 'black'


            }}
        >
            <Box
                sx={{
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 5,
                    boxSizing: 'border-box',

                }}
            >
                <TextField

                    variant="outlined"
                    placeholder="Search for movies..."
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <IconButton value={term}
                                onChange={handleSearchChange} aria-label="search"
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
