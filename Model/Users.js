const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
     username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 5
    }
})
module.exports = mongoose.model('user', UsersSchema)