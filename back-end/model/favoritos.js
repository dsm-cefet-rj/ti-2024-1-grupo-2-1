const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritosSchema = new Schema({
    userEmail:{
        type:String,
        required:true,
    },
    favAnimalsArray:[{
        type:Schema.Types.ObjectId,
        required:true,
    }],
})

favoritosSchema.virtual('id').get(function(){
    return this._id.toHexString()
});
favoritosSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
})

var Favoritos = mongoose.model("Favoritos", favoritosSchema, "favoritos");

module.exports = Favoritos;