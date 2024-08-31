const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const normalize = require('normalize-mongoose')

const animaisSchema = new Schema({
    file: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    porte: {
        type: String,
        required: true,
    },
    idade: {
        type: String,
        required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    historia: {
        type: String,
        required: true,
    },
})

// Método para renomear o campo _id para id
animaisSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
animaisSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})

var Animais = mongoose.model("Animais", animaisSchema);

module.exports = Animais;