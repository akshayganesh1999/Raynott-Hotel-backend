const express = require('express');
const connectDB = require('./config/db');
const roomRoutes = require('./routes/roomRoutes');
const cors = require('cors');
require('dotenv').config();

connectDB();

const app = express();

const allowedOrigins = [
    'http://localhost:3000',
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Raynott Hotels API is running...');
});

app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    () => console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
);