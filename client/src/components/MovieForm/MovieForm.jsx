import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [poster, setPoster] = useState('');
    const [trailer, setTrailer] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/categories')
            .then(response => {
                setCategories(response.data.Categories);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleCategoryChange = (event, newCategories) => {
        setSelectedCategories(newCategories);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const movieData = {
            title,
            description,
            poster,
            trailer,
            releaseDate,
            categories: selectedCategories,
        };
        axios.post('http://localhost:8000/api/movies', movieData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        setTitle('');
        setDescription('');
        setPoster('');
        setTrailer('');
        setReleaseDate('');
        setSelectedCategories([]);

    };
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { mb: 2, width: '100%' } }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
                Add New Movie
            </Typography>
            {/* Text fields for title, description, etc. */}
            {['title', 'description', 'poster', 'trailer'].map((field, index) => (
                <TextField
                    key={index}
                    margin="normal"
                    required
                    fullWidth
                    id={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    name={field}
                    autoComplete={field}
                    autoFocus={index === 0}
                    variant="filled"
                    value={{ title, description, poster, trailer }[field]}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (field === 'title') setTitle(value);
                        else if (field === 'description') setDescription(value);
                        else if (field === 'poster') setPoster(value);
                        else if (field === 'trailer') setTrailer(value);
                    }}
                />
            ))}
            <TextField
                margin="normal"
                required
                fullWidth
                id="releaseDate"
                label="Release Date"
                type="date"
                variant="filled"
                InputLabelProps={{ shrink: true }}
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
            />
            <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
                Select Categories:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 2 }}>
                <ToggleButtonGroup
                    color="primary"
                    value={selectedCategories}
                    onChange={handleCategoryChange}
                    aria-label="category selection"
                    sx={{ display: 'flex', flexWrap: 'wrap' }}
                >
                    {categories.map((category) => (
                        <ToggleButton key={category._id} value={category._id} aria-label={category.name} sx={{ m: 0.5 }}>
                            {category.name}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Box>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Add Movie
            </Button>
        </Box>
    );
};

export default MovieForm;
