import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';

const MovieForm = (props) => {

    const { initialTitle, initialDescription, initialPoster, initialTrailer, 
        initialReleaseDate, InitialSelectedCategories, onSubmitProp } = props;    

    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [poster, setPoster] = useState(initialPoster);
    const [trailer, setTrailer] = useState(initialTrailer);
    const [releaseDate, setReleaseDate] = useState(initialReleaseDate);
    const [selectedCategories, setSelectedCategories] = useState(InitialSelectedCategories);
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
        onSubmitProp(movieData);
        setTitle('');
        setDescription('');
        setPoster('');
        setTrailer('');
        setReleaseDate('');
        setSelectedCategories([]);

    };
    return (
            <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: "50px" }} >
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>
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
                variant=""
                sx={{ mt: 3, mb: 2, backgroundColor: "#212529", color: "white" }}
            >
                Add Movie
            </Button>
        </Box>
        
    );
};

export default MovieForm;
