const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    username: String,
    fullname: String,
    language: {
        type: String,
        required: true,
    },
    number: String,
    operation: String,
    location: {
        latitude: Number,
        longitude: Number,
        geocoded: String,
    },
})

module.exports = mongoose.model('User', userSchema);