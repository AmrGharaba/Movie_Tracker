const mongoose = require('mongoose');
const Movie = require('./movie.models');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [2, "name must be 2 characters in length"]
    },
}, { timestamps: true }
);

const Category = mongoose.model('category', CategorySchema);

module.exports = Category;
