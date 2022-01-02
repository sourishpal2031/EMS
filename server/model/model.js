const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String,
    salary: {
        type : String,
        required: true
    },
    Aadharno: {
        type : String,
        required: true
    },
    Phoneno: {
        type : String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;