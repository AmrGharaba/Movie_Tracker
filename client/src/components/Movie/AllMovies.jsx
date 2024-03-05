import React, { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import MovieCard from './MovieCard';

const AllMovies = (props) => {
    const { movies, loaded } = props;
    const [visibleMovies, setVisibleMovies] = useState(4);

    const loadMore = () => {
        setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 4);
    };


    return (
        <>
            <Grid container spacing={5} sx={{ pb: 2, backgroundColor: "black", width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
                {loaded && movies.slice(0, visibleMovies).map(movie => (
                    <Grid item xs={12} sm={6} lg={3} key={movie._id} sx={{ p: 2.5 }}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
            {loaded && movies.length > visibleMovies && (
                <Box sx={{ textAlign: 'center', backgroundColor: 'black', p: 2, width: "100%", }}>
                    <Button
                        variant="contained"
                        onClick={loadMore}
                        sx={{
                            width: "100%",
                            color: "red", 
                            backgroundColor: "black",
                            '&:hover': {
                                backgroundColor: "rgba(255, 0, 0, 0.1)", 
                            },
                        }}
                    >
                        Load More
                    </Button>
                </Box>
            )}
        </>
    );
};

export default AllMovies;
