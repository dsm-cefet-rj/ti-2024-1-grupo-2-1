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

.get(async (req, res, next) => {
    try{ 
        const registros = await registrosAdocao.find({}).maxTimeMS(3000);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(registros);
    }
    catch(err){
        err={};
        res.statusCode = 404;
        res.json(err);
    } 
})

router.route('/:id')
// Não está funcionando
.get(async (req, res, next) => {

    try{
        const registroAnimal = await registrosAdocao.findById(req.params.id);

        if (registroAnimal) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(registroAnimal); // Envie o objeto encontrado
        } else {
            res.status(404).json({ error: 'Registro não encontrado' }); // Envie um erro se não encontrado
        }
    }catch (err) {
        console.error('Erro:', err);
        res.status(500).json({ error: 'Erro interno do servidor' }); // Envie um erro interno do servidor
    }

})
.delete((req, res, next) => {
    registrosAdocao.findByIdAndDelete(req.params.id)
  .then((registro)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(registro.id);

  }, (err)=> next(err))
  .catch((err)=>next(err));
})
module.exports = router;
