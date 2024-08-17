const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    nome:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    senha:{
        type:String,
        required:true,
    },
    admin:{
        type:Boolean,
        default:false,
    }
})

// Método para renomear o campo _id para id
usuariosSchema.virtual('id').get(function(){
    return this._id.toHexString()
});
usuariosSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
})

var Usuarios = mongoose.model("Usuarios", usuariosSchema);

module.exports = Usuarios;
