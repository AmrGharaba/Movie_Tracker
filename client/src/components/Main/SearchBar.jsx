import React, { useState } from 'react';
import { Box, TextField, Button, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding={2}
                sx={{
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <TextField
                    variant="outlined"
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <Button onClick={handleSearch} color="primary" aria-label="search">
                                <SearchIcon />
                            </Button>
                        ),
                    }}
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: '25px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#757575',
                                borderRadius: '25px',
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
