const mongoose = require('mongoose');

// Define a simple user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // This field is required
        unique: true // This field must be unique
    },
    password: {
        type: String,
        required: true // This field is required
    },
    email: {
        type: String,
        required: true,
        unique: true // This field must be unique
    }
});

// Export the model
module.exports = mongoose.model('User', userSchema);