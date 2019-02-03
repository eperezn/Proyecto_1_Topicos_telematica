const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;


const Schema = mongoose.Schema;
const UserSchema = new Schema({
        username: {
        type: String,
        trim: true,  
        required: true,
        },
        email: {
        type: String,
        trim: true,
        required: true,
        },
        password: {
        type: String,
        trim: true,
        required: true
        }}, { collection : 'users' });

        
UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});


module.exports = mongoose.model('users', UserSchema);