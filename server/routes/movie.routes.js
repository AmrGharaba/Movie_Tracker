const MovieController = require('../controllers/movie.controller');

module.exports = app => {
    app.get('/api/movies', MovieController.findAllMovies);
    app.get('/api/movies/:id', MovieController.findOneSingleMovie);
    app.post('/api/movies', MovieController.createNewMovie);
    app.patch('/api/movies/:id', MovieController.updateExistingMovie);
    app.delete('/api/movies/:id', MovieController.deleteAnExistingMovie);


}
