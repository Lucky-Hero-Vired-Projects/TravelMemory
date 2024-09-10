// const mongoose = require('mongoose')
// const URL = process.env.MONGO_URI

// mongoose.connect(URL)
// mongoose.Promise = global.Promise

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'DB ERROR: '))

// module.exports = {db, mongoose}

const mongoose = require('mongoose');

// Use environment variables for MongoDB URI
const URL = process.env.MONGO_URI || 'your_default_mongo_uri';

// Connecting to MongoDB with recommended options
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Use native promises
mongoose.Promise = global.Promise;

const db = mongoose.connection;

// Event listeners for MongoDB connection events
db.on('error', console.error.bind(console, 'DB ERROR: '));  // Log errors during connection
db.once('open', () => {
    console.log('MongoDB connected successfully');
});

// Optional: Log when disconnected or reconnecting
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

db.on('reconnected', () => {
    console.log('MongoDB reconnected');
});

// Optional: Log successful reconnection attempts
db.on('reconnectFailed', () => {
    console.log('MongoDB failed to reconnect');
});

module.exports = { db, mongoose };
