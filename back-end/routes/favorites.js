var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Favoritos = require("../model/favoritos");
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

module.exports = router;
