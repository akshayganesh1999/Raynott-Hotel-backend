const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    pricePerNight: {
        type: Number,
        required: true,
    },
    maxGuests: {
        type: Number,
        required: true,
    },
    bedType: {
        type: String,
        enum: ['King', 'Queen', 'Double', 'Twin', 'Suite'],
        required: true,
    },
    sizeSqm: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    amenities: {
        type: [String],
        default: [],
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;