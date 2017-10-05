const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    address :{
        type: String,
        required: false
    },
    // photoUrl:{
    //     type: String,
    //     required: false
    // },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);