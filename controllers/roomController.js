const Room = require('../models/Room');

const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find({}).sort({ pricePerNight: 1 });
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: 'Server Error: Could not retrieve rooms.' });
    }
};

const getFeaturedRooms = async (req, res) => {
    try {
        const rooms = await Room.find({ isFeatured: true }).limit(3);
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: 'Server Error: Could not retrieve featured rooms.' });
    }
};

const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);

        if (room) {
            res.json(room);
        } else {
            res.status(404).json({ message: 'Room not found.' });
        }
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Invalid room ID format.' });
        }
        res.status(500).json({ message: 'Server Error: Could not retrieve room details.' });
    }
};

module.exports = { getRooms, getFeaturedRooms, getRoomById };