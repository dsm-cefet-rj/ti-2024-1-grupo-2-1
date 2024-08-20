const mongoose = require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    nome:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:false,
        required:true,
        unique:true,
    },
    senha:{
        type:String,
        required:false,
    },
    admin:{
        type:Boolean,
        default:false,
    }
})

// Aplicando o plugin passport-local-mongoose ao schema
usuariosSchema.plugin(passportLocalMongoose, { 
    usernameField: "email", 
    passwordField: "senha",
    // usernameQueryFields: 'email' 
});

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
