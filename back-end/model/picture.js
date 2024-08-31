const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PictureSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    file:{
        type:String,
        required: true
    },
    idAnimal:{
        type:String,
        required:true
    }
})

var Picture = mongoose.model("Picture", PictureSchema);

module.exports = Picture;