const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"User should have a name"]
    },
    age:{
        type:String,
        required:[true,"User should have a age"]
    }
})

module.exports = mongoose.model('User',userSchema);