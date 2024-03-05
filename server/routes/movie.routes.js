const MovieController = require('../controllers/movie.controller');

module.exports = app => {
    app.get('/api/movies', MovieController.findAllMovies);
    app.get('/api/movies/:id', MovieController.findOneSingleMovie);
    app.post('/api/movies', MovieController.createNewMovie);
    app.patch('/api/movies/:movieId/watchList', MovieController.addToWatchList)
    app.patch('/api/movies/:movieId/removeFromWatchList', MovieController.removeFromWatchList)

    app.patch('/api/movies/:movieId/addLike', MovieController.addLike)
    app.patch('/api/movies/:movieId/removeLike', MovieController.removeLike)



    app.patch('/api/movies/:id', MovieController.updateExistingMovie);
    app.delete('/api/movies/:id', MovieController.deleteAnExistingMovie);



}
