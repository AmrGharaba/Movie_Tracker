const User = require("../models/user.models");
const Movie = require("../models/movie.models");

module.exports.findAllUsers = (req, res) => {
    User.find({})
        .then((allUsers) => {
            res.json({ Users: allUsers })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findAllMovies = (req, res) => {
    Movie.find({})
        .then((allMovies) => {
            res.json({ Movies: allMovies })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
        .then(newlyCreatedMovie => {
            res.json({ Movie: newlyCreatedMovie })
        })
        .catch(err => res.status(400).json(err))
}

module.exports.updateExistingMovie = (req, res) => {
    Movie.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedMovie => {
            res.json({ Movie: updatedMovie })
        })
        .catch(err => res.status(400).json(err))
}


module.exports.deleteAnExistingMovie = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}
