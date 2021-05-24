const moongose = require('mongoose');

const UserSchema = moongose.Schema({
    usuario:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
});

module.exports = moongose.model('User',UserSchema);