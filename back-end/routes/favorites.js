var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Favoritos = require("../model/favoritos");
const { Mongoose } = require('mongoose');
router.use(bodyParser.json())

router.route('/')
.post((req, res, next) => {

    const data = {
        userEmail: req.body.email,
        favAnimalsArray: [],
    }

    Favoritos.create(data).then((entry) => {
        console.log("Entry criada: ", entry),
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.send({});
    }, (err) => next(err))
    .catch((err) => next(err));
})

.get(async (req, res, next) => {
    const email = req.query.userEmail;

    if (!email) {
        res.statusCode = 400;
        return res.json({ error: 'Email é obrigatório' });
    }

    try {
        console.log("Email recebido: ", email);
        const animaisFav = await Favoritos.findOne({ userEmail: email }).maxTimeMS(5000).exec();
        console.log("Resultado da query: ", animaisFav);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(animaisFav);
    } catch (err) {
        console.error(err);
        res.statusCode = 404;
        res.json({ error: 'Não foi possível encontrar os favoritos para o e-mail fornecido.' });
    }
})

.put(async (req, res, next) => {
    const email = req.query.userEmail;
    const { animalId, operacao } = req.body; 


    if (!email) {
        res.statusCode = 400;
        return res.json({ error: 'Email é obrigatório' });
    }

    try {
        console.log("Email recebido: ", email);
        console.log("Informações da operação: ID ", animalId);
        console.log("Informações da operação: OP ", operacao);
        if(operacao  === "ADD"){
            console.log("AAAAAA");
            const animaisFav = await Favoritos.findOneAndUpdateAndUpdate({ userEmail: email }, { $push: { favAnimalsArray: animalId } }).maxTimeMS(5000).exec();
            console.log("Resultado do update: ", animaisFav);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(animaisFav);
        }
        else if(operacao  === "REMOVE"){
            console.log("VVVVVVV");
            const animaisFav = await Favoritos.findOneAndUpdateAndUpdate({ userEmail: email }, { $pull: { favoriteAnimals: animalId } }).maxTimeMS(5000).exec();
            console.log("Resultado do update: ", animaisFav);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(animaisFav);
        }
        
    } catch (err) {
        console.error(err);
        res.statusCode = 404;
        res.json({ error: 'Não foi possível realizar update dos favoritos do usuário.' });
    }
})

module.exports = router;
