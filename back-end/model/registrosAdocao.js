const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registrosAdocaoSchema = new Schema({
    idAnimal:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    nomeAnimal:{
        type:String,
        required:true,
    },
    nomeAdotante:{
        type:String,
        required:true,
    },
    cpfAdotante:{
        type:String,
        required:true,
    },
    rgAdotante:{
        type:String,
        required:true,
    },
    emailAdotante:{
        type:String,
        required:true,
    },
    idadeAdotante:{
        type:String,
        required:true,
    },
    celAdotante:{
        type:String,
        required:true,
    },
    pergunta1:{
        type:String,
        required:true,
    },
    pergunta2:{
        type:Boolean,
        required:true,
    },
    pergunta3:{
        type:Boolean,
        required:true,
    },
    pergunta4:{
        type:Boolean,
        required:true,
    },
    pergunta5:{
        type:Boolean,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
    
})

registrosAdocaoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
registrosAdocaoSchema.set('toJSON',{
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
})

var registrosAdocao = mongoose.model("registrosAdocao", registrosAdocaoSchema, "registrosAdocao");

module.exports = registrosAdocao;
