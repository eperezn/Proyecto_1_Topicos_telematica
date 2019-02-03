const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
const LocationSchema = new Schema({
            username: {
            type: String,
            trim: true,  
            required: true,
            },
            latitude: {
            type: String,
            trim: true,
            required: true
            },
            longitude: {
            type: String,
            trim: true,
            required: true
            },
            hour: {
            type: String,
            trim: true,
            required: true
            },
            date: {
            type: String,
            trim: true,
            required: true
            }

}, { collection : 'location' });
module.exports = mongoose.model('Location', LocationSchema);