const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    nickname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model("User",Schema)