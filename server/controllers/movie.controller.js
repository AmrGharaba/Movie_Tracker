const Movie = require('../models/movie.models');

module.exports.findAllMovies = (req, res) => {
    Movie.find().collation({ locale: 'en', strength: 2 }).sort({ name: 1 })
        .then((allMovies) => {
            res.json({ Movies: allMovies })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneSingleMovie = (req, res) => {
    Movie.findOne({ _id: req.params.id })
        .then(oneSingleMovie => {
            res.json({ Movie: oneSingleMovie })
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

module.exports.addToWatchList = async (req, res) => {
    try {
        const userId = req.body.userId;
        const movieId = req.params.movieId;

        // Check if the movie exists
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        // Check if the user is already in the watchlist
        if (!movie.usersWatchListed.includes(userId)) {
            movie.usersWatchListed.push(userId);
            await movie.save(); // Ensure the save operation is awaited
            return res.status(200).json({ message: "User added to watchlist" });
        } else {
            return res.status(200).json({ message: "User already in watchlist" });
        }
    } catch (error) {
        console.error('Error adding to watchlist:', error); // Log the error for debugging
        return res.status(500).json({ message: error.message });
    }
};

module.exports.removeFromWatchList = async (req, res) => {
    try {
        const { userId } = req.body;
        const { movieId } = req.params;
        const movie = await Movie.findById(movieId);

        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        const index = movie.usersWatchListed.indexOf(userId);
        if (index > -1) {
            movie.usersWatchListed.splice(index, 1);
            await movie.save();
            res.status(200).json({ message: "User removed from watchlist" });
        } else {
            res.status(200).json({ message: "User not in watchlist" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




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
