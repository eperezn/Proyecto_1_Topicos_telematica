const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
const LocationSchema = new Schema({
            username: {
            type: String,
            trim: true,  
            required: true,
            },
            trackname:{
                type: String,
                trim: true,  
                required: true,
            },
            latitude: {
            type: Array,
            required: true
            },
            longitude: {
            type: Array,
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