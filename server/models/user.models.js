const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters in length"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters in length"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [2, "Email must be at least 2 characters in length"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters in length"]
    }

}, { timestamps: true }
);

const User = mongoose.model('user', UserSchema);

module.exports = User;
