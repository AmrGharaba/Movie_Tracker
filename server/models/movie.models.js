const mongoose = require('mongoose');
const User = require('./user.models');
const Category = require('./category.models');


const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [2, "title must be at least 2 characters in length"]
    },
    poster: {
        type: String
    },
    trailer: {
        type: String
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minlength: [4, "Description must be at least 4 characters in length"]
    },
    rating: {
        type: Number,
    },
    releaseDate: {
        type: Date,
        required: [true, "Release Date is required"]
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    usersLiked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    usersWatched: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    usersWatchListed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],


}, { timestamps: true }
);

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;
