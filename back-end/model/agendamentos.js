const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agendamentosSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    idUsuario: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    }
})

agendamentosSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
agendamentosSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})

var Agendamentos = mongoose.model("Agendamentos", agendamentosSchema);

module.exports = Agendamentos;