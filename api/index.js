import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

mongoose.set('debug', true);

// Connect to MongoDB using the connection string from .env
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to MongoDB!');
})
.catch((err) => {
    console.error('Could not connect to MongoDB:', err);
});

// Create an Express app
const app = express();

// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 3000');
});