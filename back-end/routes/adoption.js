var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const registrosAdocao = require('../model/registrosAdocao');
router.use(bodyParser.json());

router.route('/')
.post((req, res, next) => {
    registrosAdocao.create(req.body).then((registro) => {
        console.log("Registro arquivado: ", registro);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(registro);
    }, (err) => next(err))
    .catch((err) => next(err))
})

module.exports = router;
