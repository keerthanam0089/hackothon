require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Serve static frontend files (HTML, CSS, JS)
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));

// API routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});